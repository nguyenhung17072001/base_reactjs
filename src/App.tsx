import React from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import myTheme from 'themes/theme';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { RouterProvider } from 'react-router-dom';
import { routers } from 'router/routes';
import Fallback from 'components/Fallback/Fallback';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={myTheme}>
          <CssBaseline />
          <div className="Topup-App">
            <RouterProvider router={routers} fallbackElement={<Fallback />} />
          </div>
        </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
