import React from 'react'
import {useTheme,Typography } from "@mui/material";
import { formatCurrency, formatDate } from '@/utils/dataProcessing'



function AccountInfoBox({text, data, isProfit}) {
      let theme = useTheme();
    
  return (
    <div>
    <div
      className="text-sm font-medium"
      style={{
        color:
          theme.palette.mode === 'dark'
            ? theme.palette.secondary.main
            : theme.palette.secondary.main,
      }}
    >
      {text}
    </div>
    <Typography variant="h6" style={{ color: isProfit? theme.palette.primary.main: null }}>{formatCurrency(data)}</Typography>
  </div>
  )
}

export default AccountInfoBox