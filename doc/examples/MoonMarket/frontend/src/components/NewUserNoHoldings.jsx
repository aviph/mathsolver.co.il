import React from 'react'
import SearchBar from "@/components/SearchBar.jsx";
import { Box } from '@mui/material';
import { AlignJustify } from 'lucide-react';

function NewUserNoHoldings() {
  return (
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      gap:2,
      justifyContent:'center',
      alignItems:'center',
    }} ><p>Nothing in this portfolio yet.</p>
      <p>Add investments to see performance and track returns</p>
      <SearchBar/>
      </Box>
  )
}

export default NewUserNoHoldings