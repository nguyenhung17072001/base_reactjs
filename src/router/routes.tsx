import { createBrowserRouter } from 'react-router-dom';
import NotFound from 'pages/NotFound/NotFound';
import Layout from 'components/Layout/Layout';
import Users from 'pages/authen/Users/Users';
import Authenticated from 'context/Authenticated';
import NProgress from 'nprogress';
import Roles from 'pages/authen/Roles/Roles';
import Home from 'pages/Home';

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
        element: (
          <Home />
        ),
      },
      {
        path: 'users',
        element: (
          <Users />
        ),
        /* element: (
          <Authenticated>
            <Users />
          </Authenticated>
        ), */
        
        
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
