import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { H1 } from './atoms/H';
import { Flex } from './atoms/Flex';
import { Logo } from './atoms';
import { Layout, Header, Body, Footer } from './molecules/Layout';
import { Menu } from './molecules/Menu';


const pages = [
  { name: 'Illustration', path: '/' },
  { name: 'Sketches', path: '/sketches' },
  { name: 'About', path: '/about' },
];

const FlexStyled = styled(Flex)`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid #888;
  }
`;

export default () => (
  <Layout>
    <Header>
      <FlexStyled>
        <Logo />
        <Menu pages={pages} />
      </FlexStyled>
    </Header>
    <Body>
      <H1 gap>Koolaur</H1>
      {pages.map((page, i) => (
        <Route path={page.path} component={page.comp} key={i} />
      ))}
    </Body>
    <Footer />
  </Layout>
);
