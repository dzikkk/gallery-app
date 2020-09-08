import { default as React, ElementType, FunctionComponent } from 'react';
import styled from 'styled-components';
import { AppTheme } from '../theme/appTheme';

const TemplateWrapper = styled('div')<AppTheme>(({theme}) => ({
  height: '100vh',
}));

type DefaultTeamplerProps = {
  header?: ElementType;
  footer?: ElementType;
}

export const DefaultTemplate: FunctionComponent<DefaultTeamplerProps> = props => {
  const { header: Header, footer: Footer, children } = props;

  return (
    <TemplateWrapper>
      {Header && <Header />}
      {children}
      {Footer && <Footer />}
    </TemplateWrapper>
  )
}