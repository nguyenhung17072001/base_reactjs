import { drawerWidth } from './SideBar';
import { Drawer, DrawerProps } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

const openedMixin = (theme: Theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
  borderRight: 'none',
});

const closedMixin = (theme: any) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: 0,
  borderRight: 'none',
});

interface MiniDrawerStyledProps extends DrawerProps {
  open?: boolean;
}

export const MiniDrawerStyled = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })<MiniDrawerStyledProps>(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',

  ...(open && {
    ...openedMixin(theme),
    overflowX: 'hidden',
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    overflowX: 'hidden',
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));
