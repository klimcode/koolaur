import React, { Component } from 'react';
import Btn from './Btn';
import List from './MenuList';


export default class Menu extends Component {
  state = { isOpened: false }

  onClick = () => {
    this.setState(prev => ({
      isOpened: !prev.isOpened,
    }));
  }

  render() {
    return (
      <div className="Menu">
        {this.state.isOpened && <List items={this.props.items} />}
        <Btn onClick={this.onClick} isPressed={this.state.isOpened} />
      </div>
    );
  }
}
