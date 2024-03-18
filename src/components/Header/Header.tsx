import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { useSelector } from 'react-redux';
import { authSelector } from 'selector/authSelector';
import common from 'themes/common';


function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {common.appName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default memo(Header, isEqual);
