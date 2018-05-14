import React from 'react';
import { Route } from 'react-router-dom';

import { H1 } from 'react-sc-atoms-set';
import { Layout, Header, Body, Footer } from './layout';
import { Logo, Flex } from './atoms';
import { Menu } from './molecules';


const pages = [
  { name: 'Illustration', path: '/' },
  { name: 'Sketches', path: '/sketches' },
  { name: 'About', path: '/about' },
];

export default props => (
  <Layout>
    <Header>
      <Flex>
        <Logo />
        <Menu pages={pages} isInnerPage={props.location.pathname !== '/'} />
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
