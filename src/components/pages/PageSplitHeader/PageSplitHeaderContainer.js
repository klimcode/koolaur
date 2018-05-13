import React from 'react';
import PageSplitHeader from './PageSplitHeaderPresent';

export default class PageSplitHeaderContainer extends React.Component {
  render() {
    return (
      <PageSplitHeader {...this.props} />
    );
  }
}
