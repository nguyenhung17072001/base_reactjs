import isEqual from 'react-fast-compare';
import React, { memo, useEffect, useState } from 'react';
import { Drawer, Box, Theme, IconButton, Divider, List } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Logo from 'assets/images/logo-dashboard.png';
import { MiniDrawerStyled } from './styles';
import { menuItems } from 'utils/constants';
import NavCollapse from 'components/NavCollapse/NavCollapse';
import BackArrowIcon from 'assets/images/back-icon.png';
import { styled } from '@mui/system';

export const drawerWidth = 300;


const useStyles = styled('div')({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    height: '70px',
    paddingLeft: '16px',
    paddingRight: '16px',
    justifyContent: 'space-between'
  },
});

interface SideBarProps {
  open: boolean;
  onClose?: () => void;
}

function SideBar({ open, onClose }: SideBarProps) {
  const [isOpen, setIsOpen] = useState(true);

  const container = window !== undefined ? () => (window as any).document.body : undefined;

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleDrawerClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  return (
    <MiniDrawerStyled variant="permanent" anchor="left" open={isOpen}>
      <Box className={'drawerHeader'}>
        <img src={Logo} width="150px" height="24px" />
        <IconButton onClick={handleDrawerClose}>
          <img src={BackArrowIcon} style={{ width: '20px', height: 'auto', objectFit: 'cover' }} />
        </IconButton>
      </Box>
      <List sx={{ marginTop: '30px' }}>
        {menuItems.map((menu, _index) => {
          return <NavCollapse key={menu.id} menu={menu} level={1} />;
        })}
      </List>
    </MiniDrawerStyled>
  );
}

export default memo(SideBar, isEqual);
