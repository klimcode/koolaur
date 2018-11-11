import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';

import { Layout, Header, Body, Footer } from './atoms/Layout';
import { Flex } from './atoms/Flex';
import { Logo } from './atoms/Logo';
import { Menu } from './molecules/Menu';
import PageMain from './pages/Main';
// import PageSketches from './pages/Sketches';
import PageAbout from './pages/About';


const pages = [
  {
    name: 'Illustration', path: '/illustration', exact: true, comp: PageMain,
  },
  // { name: 'Sketches', path: '/sketches', comp: PageSketches },
  { name: 'About', path: '/about', comp: PageAbout },
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

export default props => (
  <Layout>
    <Header>
      <FlexStyled>
        <Link to="/">
          <Logo />
        </Link>
        <Menu pages={pages} {...props} />
      </FlexStyled>
    </Header>
    <Body>
      <Switch>
        {pages.map((p, i) => (
          <Route path={p.path} exact={p.exact} component={p.comp} key={i} />
        ))}
        <Route path="/:projectOpened" component={PageMain} />
        <Redirect exact from="/" to="/illustration" />
      </Switch>
    </Body>
    <Footer />
  </Layout>
);
