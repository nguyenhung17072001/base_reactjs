import { Box } from '@mui/material';
import { useMount } from 'ahooks';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';


export default function Home() {
  const dispatch = useDispatch();


  return (
    <Box sx={{ marginTop: '0px', flex: 1 }}>
      
      <h1>Home</h1>
    </Box>
  );
}
