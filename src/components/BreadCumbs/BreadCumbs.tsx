import React, { memo } from 'react';
import { Breadcrumbs as MuiBreadCumbs, Link } from '@mui/material';
import { isEqual } from 'lodash';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { MenuItem } from 'models/Menu';
import { Link as RouteLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
interface Props {
  menu: MenuItem[];
}

function BreadCumbs({ menu }: Props) {
  const theme = useTheme();
  return (
    <MuiBreadCumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
      <Link underline="none" sx={{ display: 'flex', alignItems: 'center' }} fontSize="12px" fontWeight="bold" color="#7d7d7d" href="/">
        <HomeOutlinedIcon sx={{ mr: 0.5 }} fontSize="small" />
        Trang chủ
      </Link>
      {menu.map((item, index) => (
        <Link
          component={RouteLink}
          display="flex"
          to={item.url ?? ''}
          underline="none"
          fontSize="12px"
          fontWeight="bold"
          key={item.id}
          color={index === menu.length - 1 ? theme.palette.secondary.main : '#7D7D7D'}>
          {item.title}
        </Link>
      ))}
    </MuiBreadCumbs>
  );
}

export default memo(BreadCumbs, isEqual);
