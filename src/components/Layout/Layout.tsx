import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NProgress from 'nprogress';
import { Box, Toolbar } from '@mui/material';
import Header from 'components/Header/Header';
import Footer from 'components/Footer';

function Layout() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    // const handleStart = () => NProgress.start();
    // const handleStop = () => {
    //   NProgress.done();
    // };
    NProgress.done();
    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <Box width="100%">
      <Header/>
      <Box component="main" sx={{ width: '100%', }}>
        {/* <Toolbar /> */}
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
