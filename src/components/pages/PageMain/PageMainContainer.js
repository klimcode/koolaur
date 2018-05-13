import React from 'react';
import PageMain from './PageMain';

export default class PageMainContainer extends React.Component {
  render() {
    return (
      <PageMain {...this.props} />
    );
  }
}
