import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { AppBar, Toolbar, Typography } from '@mui/material';


import { useSelector } from 'react-redux';
import { authSelector } from 'selector/authSelector';


function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your App Name
        </Typography>
        {/* Các phần tử khác trong header */}
      </Toolbar>
    </AppBar>
  );
}

export default memo(Header, isEqual);
