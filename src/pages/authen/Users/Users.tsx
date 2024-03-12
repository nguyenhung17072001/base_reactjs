import { Box } from '@mui/material';
import { useMount } from 'ahooks';
import BreadCumbs from 'components/BreadCumbs/BreadCumbs';
import { MenuItem } from 'models/Menu';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getListUsers } from './slices/userSlice';

const breadcumbs: MenuItem[] = [
  { id: '1', title: 'Quản lý người dùng', url: '#', type: 'item' },
  { id: '2', title: 'Danh sách người dùng', url: '/users', type: 'item' },
];

export default function Users() {
  const dispatch = useDispatch();

  const handleSucceedData = (data: any) => {
    console.log({ data });
  };
  useEffect(() => {
    console.log('mounted');
    dispatch(
      getListUsers({
        params: {
          offset: 0,
        },
        onSucceed: handleSucceedData,
      }),
    );
  }, []);

  return (
    <Box sx={{ marginTop: '20px', flex: 1 }}>
      <BreadCumbs menu={breadcumbs} />
      <h1>Users</h1>
    </Box>
  );
}
