import { createTheme } from '@mui/material';

/** Tema personalizado para a aplicação, definindo cores, estilos e componentes do Material-UI */
export const theme = createTheme({
  palette: {
    mode: 'light',

    background: {
      default: '#FFEDF2',
    },
    text: {
      primary: '#000826',
    },
    primary: {
      main: '#E80070',
    },
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#FFEDF2',
          borderColor: '#E80070',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#FFEDF2',
            color: '#000826',
            '& fieldset': { borderColor: '#000826' },
          },
        },
      },
    },
  },
});
