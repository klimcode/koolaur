import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Header } from './layout/Header';
import { Body } from './layout/Body';
// import { Footer } from './layout/Footer';

import MenuBtn from './Menu/Btn';
import { Preview } from './Preview';
import { PageMain } from './pages/PageMain';
import { PageRhytm } from './pages/PageRhytm';
import { PageSplitHeader } from './pages/PageSplitHeader';


const pages = [
  { name: 'Vertical Rhytm', path: '/rhytm', comp: PageRhytm },
  { name: 'Split Header', path: '/split-header', comp: PageSplitHeader },
];

const GoBackBtn = props => (
  <Link to="/">
    <MenuBtn isPressed={props.isInnerPage} />
  </Link>
);

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header>
          <GoBackBtn isInnerPage={this.props.location.pathname !== '/'} />
        </Header>
        <Body>
          {this.props.match.isExact && <PageMain pages={pages} preview={Preview} />}
          {pages.map((page, i) => (
            <Route path={page.path} component={page.comp} key={i} />
          ))}
        </Body>
      </div>
    );
  }
}
