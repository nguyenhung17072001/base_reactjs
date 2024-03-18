import { Box } from '@mui/material';
import { useMount } from 'ahooks';
import BreadCumbs from 'components/BreadCumbs/BreadCumbs';
import { MenuItem } from 'models/Menu';
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
