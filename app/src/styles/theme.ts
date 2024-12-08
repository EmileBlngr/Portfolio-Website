import { createTheme } from "@mui/material";

export const darkgray = 'darkgray';

const theme = createTheme({
    palette: {
      primary: {
        main: '#1e3885',
        contrastText: '#6e8ade',
        dark : '#000000'
      },
      secondary: {
        main: 'rgba(255, 255, 255)',
      },
    },
    typography: {
      fontFamily: '"Rethink Sans", sans-serif',
      fontSize: 14,
      h1: {
          fontSize: '1.4rem',
          fontWeight: 700
        },
        h2: {
          fontSize: '1.2rem',
          fontWeight: 700
        },
        h3: {
          fontSize: '1.05rem',
          fontWeight: 'normal'
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                '&[component="a"]': {
                    textDecoration: 'none',
                    fontFamily: '"Rethink Sans", sans-serif',
                },
                },
            },
        },
        MuiTab: {
          styleOverrides: {
            root: {
              color: darkgray,
            }
          }
        },
        MuiDrawer: {
          styleOverrides: {
            paper: {
              boxShadow: '0px 0px 100px black',
            },
          },
        },
    },
    shadows: [
      'none',
      '0px 1px 3px black, 0px 1px 1px black, 0px 2px 1px black',
      '0px 3px 6px black',
      '0px 4px 8px black',
      '0px 6px 10px black',
      '0px 8px 12px black',
      '0px 10px 14px black',
      '0px 12px 16px black',
      '0px 14px 18px black',
      '0px 16px 20px black',
      '0px 18px 22px black',
      '0px 20px 24px black',
      '0px 22px 26px black',
      '0px 24px 28px black',
      '0px 26px 30px black',
      '0px 28px 32px black',
      '0px 30px 34px black',
      '0px 32px 36px black',
      '0px 34px 38px black',
      '0px 36px 40px black',
      '0px 38px 42px black',
      '0px 40px 44px black',
      '0px 42px 46px black',
      '0px 44px 48px black',
      '0px 46px 50px black'
    ],
    breakpoints: {
      values: {
        xs: 450,
        sm: 600,
        md: 960,
        lg: 1250,
        xl: 1536
      }
    }
  });
export default theme;