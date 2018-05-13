import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="app__header">
        <div className="app__container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
