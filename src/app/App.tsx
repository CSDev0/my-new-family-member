import "@fontsource/roboto"; // Loading Roboto font. MUI was designed with this font in mind.
import {
  Box,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { RootState } from "./store";
import { useAppSelector } from "./hooks";
import routes from "./routes";
import { RouterProvider } from "react-router-dom";

const App = () => {

  const fontSize = useAppSelector((state: RootState) => state.webConfig.fontSize)
  const theme = useAppSelector((state: RootState) => state.webConfig.theme);

  const light: ThemeOptions = {
    palette: {
      mode: "light",
      secondary: {
        main: '#f8743aff',
        contrastText: '#fff',
      }
    },
    typography: {
      htmlFontSize: fontSize,
    },
  };

  const dark: ThemeOptions = {
    palette: {
      mode: "dark",
      secondary: {
        main: '#f8743aff',
        contrastText: '#fff',
      }
    },

    typography: {
      htmlFontSize: fontSize,
    },
  };

  const availableThemes = { dark, light };

  return (
    <ThemeProvider theme={createTheme(availableThemes[theme])}>
      <CssBaseline />
      <Box sx={{ width: '100vw', minHeight: '100vh'}}>
        <RouterProvider router={routes} />
      </Box>
    </ThemeProvider>
  );
};

export default App;