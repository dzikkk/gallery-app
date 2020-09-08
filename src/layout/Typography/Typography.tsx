import styled from 'styled-components';

export const H4 = styled.h4(({ theme, color, style }) => ({
  margin: 0,
  color: theme.palette.text[color || 'primary'],
  ...theme.typography.h4,
  ...theme.typography.fontFamily,
  ...style,
}));

export const H3 = styled.h3(({ theme, color, style }) => ({
  margin: 0,
  color: theme.palette.text[color || 'primary'],
  ...theme.typography.h3,
  ...theme.typography.fontFamily,
  ...style,
}));

export const H2 = styled.h2(({ theme, color, style }) => ({
  margin: 0,
  color: theme.palette.text[color || 'primary'],
  ...theme.typography.h2,
  ...theme.typography.fontFamily,
  ...style,
}));

export const H1 = styled.h1(({ theme, color, style }) => ({
  margin: 0,
  color: theme.palette.text[color || 'primary'],
  ...theme.typography.h1,
  ...theme.typography.fontFamily,
  ...style,
}));
