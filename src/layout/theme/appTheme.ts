
const colors = {
  blue: '#50c6f1',
}

export const appTheme = {
  palette: {
    primary: {
      main: colors.blue,
    },
  }
}

export type AppTheme = {theme: typeof appTheme};