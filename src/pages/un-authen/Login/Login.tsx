import { Box, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { Container } from '@mui/system';
import logo from 'assets/images/logo.png';
import { useForm, Controller } from 'react-hook-form';
import { isEmpty, get } from 'lodash';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from 'selector/authSelector';
import {LoadingButton} from '@mui/lab';
import { loginRequest } from './slice/authSlice';

interface Values {
  username: string;
  password: string;
}

export default function Login() {
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({
    defaultValues: {
      username: 'SUPER_ADMIN',
      password: 'Admin@123',
    },
    mode: 'onSubmit',
  });

  const onSubmit = (values: Values) => {
    dispatch(
      loginRequest({
        username: values.username,
        password: values.password,
      }),
    );
  };

  return (
    <Box display="flex">
      
    </Box>
  );
}
