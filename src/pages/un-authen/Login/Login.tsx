import { Box, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { Container } from '@mui/system';
import logo from 'assets/images/logo.png';
import { useForm, Controller } from 'react-hook-form';
import { isEmpty, get } from 'lodash';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from 'selector/authSelector';
import LoadingButton from '@mui/lab/LoadingButton';
import { loginRequest } from './slice/authSlice';
import { useStyles } from './styles';

interface Values {
  username: string;
  password: string;
}

export default function Login() {
  const classes = useStyles();
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
    <Box display="flex" className={classes.root}>
      <Box className={classes.mainContent}>
        <Container maxWidth="sm">
          <Box className={classes.imgWrapper}>
            <img src={logo} className={classes.img} alt="logo" />
          </Box>
          <Paper elevation={1} className={classes.paper}>
            <Typography variant="h2" fontWeight="bold" fontSize={30}>
              Đăng nhập
            </Typography>
            <Typography variant="h4" fontSize={16} marginBottom="27px" marginTop="5px">
              Fill in the fields below to sign into your account.
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'Email không được bỏ trống',
                  },
                }}
                name="username"
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={!isEmpty(errors.username)}
                    helperText={get(errors, 'username.message', '')}
                    fullWidth
                    label="User Name"
                    className={classes.input}
                    FormHelperTextProps={{
                      style: {
                        fontSize: 12,
                        color: '#ff0000',
                        fontWeight: 500,
                        marginLeft: 0,
                      },
                    }}
                  />
                )}
              />
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'Email không được bỏ trống',
                  },
                }}
                name="password"
                render={({ field }) => <TextField {...field} fullWidth label="Mật khẩu" type="password" className={classes.input} />}
              />

              {!!auth.message && (
                <Typography color="#ff0000" fontSize={14} fontWeight={500} margin="10px">
                  {auth.message}
                </Typography>
              )}

              <LoadingButton type="submit" fullWidth variant="contained" className={classes.btn} loading={auth.status === 'loading'}>
                Đăng nhập
              </LoadingButton>
            </form>
            <Typography fontWeight={500} margin="40px 0">
              Don’t have an account, yet?
              <Link to="/register" className={classes.register}>
                Sign up here
              </Link>
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
