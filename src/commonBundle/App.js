import React from 'react';
import { Route } from 'react-router-dom';

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

export default () => (
  <Layout>
    <Header>
      <Flex>
        <Logo />
        <Menu pages={pages} />
      </Flex>
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
