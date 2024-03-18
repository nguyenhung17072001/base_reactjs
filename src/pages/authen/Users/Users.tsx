import { Box } from '@mui/material';
import { useMount } from 'ahooks';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getListUsers } from './slices/userSlice';


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
      <h1>Users</h1>
    </Box>
  );
}
