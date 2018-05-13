import React from 'react';

export default class PageSplitHeaderPresent extends React.Component {
  render() {
    return (
      <div className="PageSplitHeader">
        <div className="header-split">
          <h2>Split-line header</h2>
        </div>
        <div className="header-split">
          <h2>Lines are invisible<br />on mobile devices</h2>
        </div>
      </div>
    );
  }
}
