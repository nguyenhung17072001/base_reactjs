
import { Theme } from '@mui/material';
import { styled } from '@mui/system';

export const MyComponent = styled('div')({
  root: {
    display: 'flex',
    flex: '1 1 0%',
    width: '100%',
    flexDirection: 'column',
  },
  mainContent: {
    display: 'flex',
    width: '100%',
    flex: '1 1 0%',
    padding: '20px',
  },
  imgWrapper: {
    textAlign: 'center',
  },
  img: {
    width: '55px',
    heigth: '100%',
    objectFit: 'cover',
  },
  paper: {
    overflow: 'hidden',
    marginTop: '27px',
    padding: '45px 36px 27px',
  },
  input: {
    margin: '20px 0px !important',
    '& .MuiInputBase-root': {
      borderRadius: '10px',
      fontSize: 14,
    },
  },
  register: {
    fontWeight: 600,
    marginLeft: '10px',
    textDecoration: 'none',
  },
  btn: {
    backgroundColor: '#EA6200 !important',
    borderRadius: 10,
    padding: '11px 24px !important',
    '&:hover': {
      backgroundColor: '#b0632b !important',
    },
    boxShadow: 'none !important',
  },
});
