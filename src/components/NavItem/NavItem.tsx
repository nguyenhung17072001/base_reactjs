import { useTheme } from '@mui/material/styles';
import { MenuItem } from 'models/Menu';
import React, { forwardRef, memo, useEffect } from 'react';
import isEqual from 'react-fast-compare';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
interface NavItemProps {
  item: MenuItem;
  level: number;
  selected?: boolean;
}

function NavItem({ item, level, selected }: NavItemProps) {
  const theme = useTheme();
  const location = useLocation();

  const listItemProps = {
    component: forwardRef<HTMLAnchorElement, any>((props, ref) => <Link ref={ref} {...props} to={item.url ?? ''} />),
  };

  return (
    <ListItemButton
      {...listItemProps}
      sx={{
        borderRadius: '8px',
        mb: 0.5,
        alignItems: 'flex-start',
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`,
      }}>
      <ListItemText
        primary={
          <Typography fontSize={14} fontWeight={700} color={selected ? theme.palette.secondary.main : 'inherit'}>
            {item.title}
          </Typography>
        }
      />
    </ListItemButton>
  );
}

export default memo(NavItem, isEqual);
