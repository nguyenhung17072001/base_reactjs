import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NProgress from 'nprogress';
import { Box, Toolbar } from '@mui/material';
import SideBar from 'components/SideBar/SideBar';
import Header from 'components/Header/Header';

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
    <Box display="flex" width="100%">
      <Header/>
      {/* <SideBar open={open} onClose={() => setOpen(false)} /> */}
      <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Toolbar />
        {/* <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} /> */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
