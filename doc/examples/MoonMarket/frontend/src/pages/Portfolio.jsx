import { getPortfolioSnapshots, postSnapshot } from "@/api/portfolioSnapshot";
import { getHistoricalData, updateStockPrices } from "@/api/stock";
import { getUserData, getUserInsights } from "@/api/user";
import { cacheService } from '@/cacheService';
import AiDialog from "@/components/AiDialog";
import DataGraph from "@/components/DataGraph";
import GraphMenu from "@/components/GraphMenu";
import { HistoricalDataCard } from '@/components/HistoricalDataCard';
import NewUserNoHoldings from "@/components/NewUserNoHoldings";
import SnapshotChart from "@/components/SnapShotChart";
import useGraphData from "@/hooks/useGraphData";
import { PercentageChange } from "@/pages/Layout";
import GraphSkeleton from "@/Skeletons/GraphSkeleton";
import "@/styles/App.css";
import { lastUpdateDate } from "@/utils/dataProcessing";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  useLoaderData
} from "react-router-dom";
import { ErrorFallback } from "@/components/ErrorFallBack"
import { useUser} from '@/contexts/UserContext';






export async function loader({ request }) {
  const { searchParams } = new URL(request.url);
  const selectedTicker = searchParams.get("selected") || "BTCUSD";

  return {
    historicalData: getHistoricalData(selectedTicker),
    selectedTicker
  };
}


function Portfolio() {
  const userData = useUser();
  const { historicalData, selectedTicker } = useLoaderData();
  const queryClient = useQueryClient();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xl'));
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery('(min-width:1550px) and (max-width:1800px)');
  const [openInsights, setOpenInsights] = useState(false);
  const [aiData, setAiData] = useState({ portfolio_insights: [], sentiments: {} });
  const [loadingAI, setLoadingAI] = useState(false);

  const fetchInsights = async () => {
    setLoadingAI(true);
    try {
      const response = await getUserInsights();
      const data = response.data;
      setAiData({
        portfolio_insights: data.portfolio_insights || "",
        citations: data.citations || [],
        sentiments: {}
      });
      setOpenInsights(true);
    } catch (error) {
      throw error;
    } finally {
      setLoadingAI(false);
    }
  };





  const { data: dailyTimeFrame, isPending: dailyTimeFrameLoading } = useQuery({
    queryKey: ["dailyTimeFrame"],
    queryFn: () => getPortfolioSnapshots(),
  });

  const updateStockPricesMutation = useMutation({
    mutationFn: (tickers) => updateStockPrices(tickers),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['holdingsData'] });
    },
    onError: () => {
      console.log("failed to update stock prices")
    }
  });



  return (
    <Box
      className="custom-scrollbar"
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        gridTemplateColumns: isSmallScreen ? "1fr" : "1000px auto",
        paddingY: isMobileScreen ? 2 : isSmallScreen ? 2 : 1,
        paddingX: isMobileScreen ? 2 : isSmallScreen ? 2 : 5,
        marginX: isMobileScreen ? 1 : isSmallScreen ? 1 : 5,
        overflowY: "auto",
        height: isSmallScreen & !isMobileScreen ? '83vh' : '100%',
        gap: isMobileScreen ? 2 : isSmallScreen ? 2 : 4,
        alignItems: isMobileScreen ? "center" : "flex-start",
      }}
    >

      <ErrorBoundary FallbackComponent={ErrorFallback}>
          <PortfolioContent userData={userData} theme={theme} isMediumScreen={isMediumScreen} isMobileScreen={isMobileScreen} isSmallScreen={isSmallScreen} />
      </ErrorBoundary>

      {openInsights && (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <AiDialog aiData={aiData} openInsights={openInsights} setOpenInsights={setOpenInsights} />
        </ErrorBoundary>
      )}

      <Box sx={{
        width: isSmallScreen ? "100%" : isMediumScreen ? 500 : 600,
        ml: isSmallScreen ? 0 : "auto",
      }}>
        <Stack spacing={isSmallScreen ? 4 : 3} direction={isSmallScreen ? "column-reverse" : "column"} sx={{ height: "100%" }}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            {dailyTimeFrameLoading ? (
              <GraphSkeleton height={380} />
            ) : (
              <StackedCardsWrapper
                dailyTimeFrame={dailyTimeFrame}
                userData={userData}
                updateStockPricesMutation={updateStockPricesMutation}
                fetchInsights={fetchInsights}
                loadingAI={loadingAI}
              />
            )}
          </ErrorBoundary>
          <HistoricalDataCard historicalData={historicalData} selectedTicker={selectedTicker} />
        </Stack>
      </Box>
    </Box>
  );
}

function PortfolioContent({ userData, theme, isSmallScreen, isMobileScreen, isMediumScreen }) {
  const [selectedGraph, setSelectedGraph] = useState("Treemap");
  const [isDailyView, setIsDailyView] = useState(false);
  const { visualizationData, isDataProcessed, value, moneySpent } = useGraphData(
    userData,
    selectedGraph,
    isDailyView
  );

  const queryClient = useQueryClient();
  const postSnapshotMutation = useMutation({
    mutationFn: postSnapshot,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["dailyTimeFrame"] });
    },
    onError: (error) => {
      console.error("Error posting a snapshot", error);
    },
  });

  useEffect(() => {
    if (visualizationData != null) {
      postSnapshotMutation.mutate({ value: value, cumulativeSpent: moneySpent });
    }
  }, [value]);

  if (userData.holdings.length === 0) {
    return (
      <div className="container"><NewUserNoHoldings /></div>

    )

  }

  return (

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: isMobileScreen ? 'unset' : "center",
        width: isSmallScreen ? "100%" : isMediumScreen ? "800px" : "1000px",
        margin: "auto",
      }}
    >
      <GraphMenu
        selectedGraph={selectedGraph}
        setSelectedGraph={setSelectedGraph}
        isMobileScreen={isMobileScreen}
        isDailyView={isDailyView}
        setIsDailyView={setIsDailyView}
      />
      <DataGraph
        isDataProcessed={isDataProcessed}
        selectedGraph={selectedGraph}
        visualizationData={visualizationData}
        width={isMobileScreen ? 300 : isSmallScreen ? 500 : isMediumScreen ? 800 : 1000}
        height={isMobileScreen ? 250 : isSmallScreen ? 500 : isMediumScreen ? 550 : 660}
        isDailyView={isDailyView}
      />
    </Box>
  );
}

const StackedCardsWrapper = ({ dailyTimeFrame, userData, updateStockPricesMutation, fetchInsights, loadingAI }) => {
  const { percentageChange, setPercentageChange } =
    useContext(PercentageChange);
  const { stockTickers, value, moneySpent } = useGraphData(userData, "Treemap");
  const formattedDate = lastUpdateDate(userData);
  const incrementalChange = value - moneySpent;

  useEffect(() => {
    if (moneySpent !== 0 && setPercentageChange) {
      const newPercentageChange = (incrementalChange / moneySpent) * 100;
      setPercentageChange(newPercentageChange);
    }
  }, [incrementalChange, moneySpent]);

  return (

    <SnapshotChart
      formattedDate={formattedDate}
      stockTickers={stockTickers}
      incrementalChange={incrementalChange}
      percentageChange={percentageChange}
      value={value}
      dailyTimeFrameData={dailyTimeFrame}
      updateStockPricesMutation={updateStockPricesMutation}
      fetchInsights={fetchInsights}
      loadingAI={loadingAI}
    />

  );
};

export default Portfolio;
