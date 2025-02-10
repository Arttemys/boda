import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand, kalam, sans-serif',
  },
  palette: {
    primary: {
      main: '#1C1C1A',
      light: '#DACE9A',
      dark: '#D2AF5B'
    },
    secondary: {
      main: '#9B7F50'
    },
    background: {
      default: '#464936',
    }
  }
});