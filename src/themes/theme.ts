import { createTheme } from '@mui/material/styles';

const myTheme = createTheme({
  palette: {
    mode: 'light',
    common: {
      white: '#fff',
    },
    primary: {
      main: '#0678B3',
      dark: '#21388A',
      light: '#F1F4FF',
    },
    secondary: {
      main: '#EA6200',
      light: '#fff',
      '100': '#EA6200',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => `
        body {
          background-color: #F5F7FA;
        }
      `,
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'inherit',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
      variants: [
        {
          props: {
            variant: 'contained',
            className: 'primary-button',
          },
          style: {
            backgroundColor: '#EA6200',
            borderRadius: 10,
            padding: '11px 24px',
            '&:hover': {
              backgroundColor: '#b0632b',
            },
            boxShadow: 'none',
          },
        },
        {
          props: {
            variant: 'contained',
            color: 'secondary',
          },
          style: {
            height: 33,
            width: 200,
            borderRadius: 0,
            boxShadow: 'none',
          },
        },
      ],
    },

    MuiPaper: {
      variants: [
        {
          props: {
            elevation: 1,
          },
          style: {
            borderRadius: '10px',
            boxShadow: 'rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px',
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {},
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {},
      },
      variants: [
        {
          props: {
            className: 'menu-item',
          },
          style: {
            paddingTop: '10px',
            paddingBottom: '10px',
            transition: 'all .3s ease',
            '&.Mui-selected': {
              color: '#fff',
              backgroundColor: '#21388A',
              '&:hover': {
                backgroundColor: '#21388A',
              },
              '& .MuiListItemIcon-root': {
                color: '#fff',
              },
            },
            '&:hover': {
              backgroundColor: '#21388A',
              color: '#fff',
              '& .MuiListItemIcon-root': {
                color: '#fff',
              },
            },
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: ['Mulish', 'sans-serif'].join(','),
  },
});

export default myTheme;
