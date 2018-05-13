import React, { Component } from 'react';

export default class Body extends Component {
  render() {
    const children = this.props.children.filter(el => el);
    return (
      <div className="app__body">
        {
          children.map((child, i) => (
            <div className="app__container" key={i}>
              {child}
            </div>
          ))
        }
      </div>
    );
  }
}
