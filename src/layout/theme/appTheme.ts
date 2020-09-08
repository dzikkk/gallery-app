
const colors = {
  grey: '#68717A',
  greyLight: '#9EACBA',
  greyDark: '#373C41',
  lightblue: '#D4E7FA',
  blue: '#BFD0E0',
  black: '#242424',
  white: '#ffffff',
};

export const appTheme = {
  palette: {
    elements: {
      main: colors.grey,
      secondary: colors.blue,
      accent: colors.lightblue,
      lighter: colors.greyLight,
      dark: colors.greyDark,
    },
    text: {
      primary: colors.black,
      secondary: colors.greyDark,
      light: colors.blue,
      white: colors.white,
    },
  },
  typography: {
    h1: {
      fontSize: 26,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    h4: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    fontFamily: {},
  },
};

export type AppTheme = {theme: typeof appTheme};