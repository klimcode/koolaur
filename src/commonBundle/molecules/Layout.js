import React from 'react';
import styled from 'styled-components';
import { media } from '../atoms/defaults';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-width: 320px;
`;
const Container = styled.div`
  margin: auto;
  max-width: ${media.md}px;
`;
const HeaderStyled = styled.div`
  padding: 16px 0;
`;
const BodyStyled = styled.div`
  /* display: flex; */
  flex: 1 0 auto;
`;
const FooterStyled = styled.div`
  /* display: flex; */
  /* flex-shrink: 0; */
`;


const Header = props => (
  <HeaderStyled>
    <Container>
      {props.children}
    </Container>
  </HeaderStyled>
);
const Body = props => (
  <BodyStyled>
    <Container>
      {props.children}
    </Container>
  </BodyStyled>
);
const Footer = props => (
  <FooterStyled>
    <Container>
      {props.children}
    </Container>
  </FooterStyled>
);


export { Layout, Container, Header, Body, Footer };
