import { styled } from '@mui/system';
import { drawerWidth } from 'components/SideBar/SideBar';

export const useStyles = styled('div')( {
    toolbar: {
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingTop: '20px',
      paddingBottom: '20px',
    },
    rootOpen: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      
    },
    inputSearch: {
      width: 300,
      backgroundColor: '#fff',
      borderRadius: '48px !important',
      fontSize: '14px',
      border: '1px solid #fff',
      height: '42px !important',
      padding: '10px',
    },
  });
