import React, { Fragment } from 'react';
import './style.css';

export default class PreviewPresent extends React.Component {
  render() {
    const Page = this.props.comp;
    return (
      <Fragment>
        <span className="Preview__name fs_20">{this.props.name}</span>
        <span className="Preview__window">
          <Page />
        </span>
      </Fragment>
    );
  }
}
