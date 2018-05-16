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
  box-sizing: border-box;
  margin: auto;
  max-width: ${media.md}px;
  padding: 0 8px;
  width: 100%;
`;
const HeaderStyled = styled.div`
  padding-top: 16px;
`;
const BodyStyled = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;

  & > div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
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
