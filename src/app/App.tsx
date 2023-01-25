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
import { getTheme } from "./themes";

const App = () => {

  const fontSize = useAppSelector((state: RootState) => state.webConfig.fontSize)
  const theme = useAppSelector((state: RootState) => state.webConfig.theme);

  return (
    <ThemeProvider theme={createTheme(getTheme(theme, fontSize))}>
      <CssBaseline />
      <Box sx={{ width: '100vw', minHeight: '100vh'}}>
        <RouterProvider router={routes} />
      </Box>
    </ThemeProvider>
  );
};

export default App;