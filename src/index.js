/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './commonBundle/App';
import theme from './css/theme';

import './css/critical.css'; // is downloaded as a separate css file before the JS bundle

import('./css/rest.css'); // is downloaded after the JS bundle


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);


if (module.hot) {
  module.hot.accept();
}
