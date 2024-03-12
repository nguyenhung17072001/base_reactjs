import { Avatar, Box, InputAdornment, Stack, Typography, IconButton, InputBase, Theme, AppBar, Toolbar } from '@mui/material';
import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { drawerWidth } from 'components/SideBar/SideBar';
import { styled } from '@mui/material/styles';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import { authSelector } from 'selector/authSelector';

const AppBarStyled = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#F5F7FA !important',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface HeaderProps {
  open?: boolean;
  onOpenDrawer?: () => void;
}

function Header({ open, onOpenDrawer }: HeaderProps) {
  const classes = useStyles(open);
  const auth = useSelector(authSelector);
  return (
    <AppBarStyled open={open} elevation={0} color="inherit">
      <Toolbar className={classes.toolbar}>
        <Box>
          {!open && (
            <IconButton color="inherit" aria-label="open drawer" onClick={onOpenDrawer} edge="start" sx={{ mr: 2, ...(open ? { display: 'none' } : {}) }}>
              <MenuIcon fill="#333" />
            </IconButton>
          )}
          <InputBase
            id="adornment-search"
            value=""
            className={classes.inputSearch}
            placeholder="Tìm kiếm"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon fontSize="medium" />
              </InputAdornment>
            }
            inputProps={{
              'aria-label': 'search',
            }}
          />
        </Box>
        <Stack direction="row" spacing="16px" alignItems="center">
          <IconButton color="inherit" aria-label="open notification">
            <NotificationsOutlinedIcon fontSize="medium" />
          </IconButton>
          <Stack direction="row" spacing="10px" alignItems="center">
            <Avatar src="/static/images/avatar/1.jpg" sx={{ width: 50, height: 50 }} alt="Remy Sharp" />
            <Box>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#7d7d7d',
                }}>
                Xin chào
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#EA6200',
                }}>
                {auth.userInfo?.username}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBarStyled>
  );
}

export default memo(Header, isEqual);
