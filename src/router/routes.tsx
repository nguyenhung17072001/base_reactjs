import { createBrowserRouter } from 'react-router-dom';
import Dashboard from 'pages/authen/Dashboard/Dashboard';
import Login from 'pages/un-authen/Login/Login';
import Register from 'pages/un-authen/Register/Register';
import AuthLayout from 'components/AuthLayout/AuthLayout';
import NotFound from 'pages/NotFound/NotFound';
import Layout from 'components/Layout/Layout';
import Users from 'pages/authen/Users/Users';
import Authenticated from 'context/Authenticated';
import NProgress from 'nprogress';
import Roles from 'pages/authen/Roles/Roles';

export const routers = createBrowserRouter([
  /* {
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        index: true,
        element: <Login />,
      },
      { path: 'register', element: <Register /> },
    ],
  }, */
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        /* element: (
          <Authenticated>
            <Dashboard />
          </Authenticated>
        ), */
        element: (
            <Dashboard />
        ),
        
      },
      {
        path: 'users',
        element: (
          <Authenticated>
            <Users />
          </Authenticated>
        ),
        
        
      },
      {
        path: 'roles',
        element: (
          <Authenticated>
            <Roles />
          </Authenticated>
        ),
        
      },
    ],
  },
  { path: '*', element: <NotFound /> },
]);
