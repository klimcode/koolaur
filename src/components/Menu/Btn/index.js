import React from 'react';
import './Btn.css';

export default class Btn extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.isPressed !== nextProps.isPressed) {
      return true;
    }
    return false;
  }

  clickHandler = e => (
    this.props.onClick && this.props.onClick(this.props, e)
  );

  render() {
    return (
      <div
        className={`Menu__btn ${this.props.isPressed && 'open'}`}
        onClick={this.clickHandler}
      >
        <div className="Menu__btnIcon">
          <b />
        </div>
      </div>
    );
  }
}
