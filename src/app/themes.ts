import { ThemeOptions } from "@mui/material";



  export const getTheme = (theme: 'dark' | 'light', fontSize: number) => {
    const themes: { light: ThemeOptions, dark: ThemeOptions} = {
    light:  {
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
      },
    
      dark: {
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
      }
    }

      return themes[theme];
  }