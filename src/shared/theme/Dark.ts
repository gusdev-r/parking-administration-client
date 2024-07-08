import { createTheme } from "@mui/material";
import { deepPurple, grey } from "@mui/material/colors";


export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[700],
      dark: deepPurple[700],
      light: deepPurple[800],
      contrastText: '#ffffff'
    },
    secondary: {
      main: grey[500],
      dark: grey[400],
      light: grey[300],
      contrastText: '#ffffff'
    },
    background: {
      paper: '#303134',
      default: '#202124'
    }
  }
})