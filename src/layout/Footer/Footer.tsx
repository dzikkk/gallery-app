import { default as React, FunctionComponent } from "react";
import styled from "styled-components";
import { H2 } from "../Typography/Typography";

const FooterWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.elements.main,
  height: 60,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 20,
  boxShadow: '0px 7px 24px 10px rgba(0,0,0,0.73)',
}));

export const Footer: FunctionComponent = () => (
  <FooterWrapper>
    <H2 color={'main'}>XyZ Gallery</H2>
  </FooterWrapper>
);