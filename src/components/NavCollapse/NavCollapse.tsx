import { Typography, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NavItem from 'components/NavItem/NavItem';
import { MenuItem } from 'models/Menu';
import React, { memo, useEffect, useState } from 'react';
import isEqual from 'react-fast-compare';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { useLocation } from 'react-router-dom';

interface NavCollapseProps {
  menu: MenuItem;
  level: number;
}

function NavCollapse({ menu, level }: NavCollapseProps) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [selected, setSelected] = useState<string>('');

  const handleClick = () => {
    setOpen(!open);
    setSelected(!selected ? menu.id : '');
  };

  useEffect(() => {
    const urls = menu.children?.map((m) => m.url ?? '');
    if (urls?.includes(location.pathname)) {
      setSelected(menu.id);
      setOpen(true);
    }
  }, [location.pathname]);

  // menu collapse & item
  const menus = menu.children?.map((item) => {
    switch (item.type) {
      case 'item':
        return <NavItem key={item.id} item={item} selected={item.url === location.pathname} level={level + 1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  const Icon: any = menu.icon ? menu.icon : null;

  return (
    <>
      <ListItemButton
        className="menu-item"
        sx={{
          borderRadius: `8px`,
          mb: '10px',
          alignItems: 'flex-start',
          backgroundColor: selected === menu.id ? theme.palette.primary.dark : theme.palette.primary.light,
          py: level > 1 ? 1 : 1.25,
          border: '1px solid ' + theme.palette.primary.light,
          mx: '18px',
        }}
        onClick={handleClick}>
        <ListItemIcon sx={{ my: 'auto', minWidth: '30px' }}>
          <Icon sx={{ color: selected === menu.id ? '#fff' : 'inherit' }} />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              color={selected === menu.id ? '#fff' : 'inherit'}
              sx={{
                my: 'auto',
              }}>
              {menu.title}
            </Typography>
          }
        />
        {!!menu.children ? (
          open ? (
            <ExpandLessOutlinedIcon style={{ marginTop: 'auto', marginBottom: 'auto', color: selected === menu.id ? '#fff' : 'inherit' }} />
          ) : (
            <ExpandMoreOutlinedIcon style={{ marginTop: 'auto', marginBottom: 'auto', color: selected === menu.id ? '#fff' : 'inherit' }} />
          )
        ) : null}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{
            position: 'relative',
          }}>
          {menus}
        </List>
      </Collapse>
    </>
  );
}

export default memo(NavCollapse, isEqual);
