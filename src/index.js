/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './commonBundle/App';
import theme from './css/theme';
import './css/critical.css';
// lazy loading
import('./css/rest.css');


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <HashRouter>
      <Route path="/" component={App} />
    </HashRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);


if (module.hot) {
  module.hot.accept();
}
