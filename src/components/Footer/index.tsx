import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Link, Box, Typography } from '@mui/material';


import { useSelector } from 'react-redux';
import { authSelector } from 'selector/authSelector';


const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        textAlign: 'center',
        marginTop: '20px',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Your Website Name
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ marginTop: '5px' }}>
        Built with{' '}
        <Link href="https://mui.com/" target="_blank" rel="noopener noreferrer">
          Material-UI
        </Link>
      </Typography>
    </Box>
  );
}

export default memo(Footer, isEqual);
