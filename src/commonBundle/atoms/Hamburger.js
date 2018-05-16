import React from 'react';
import styled, { css } from 'styled-components';


const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  width: 48px;
  padding: 8px;

  cursor: pointer;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
`;


const cssIconPressed = css`
  &:before {
    top: 50%;
    transform: rotate(135deg);
  }
  & b {
    opacity: 0;
    left: -60px;
  }
  &:after {
    top: 50%;
    transform: rotate(-135deg);
  }
`;
const Icon = styled.div`
  position: relative;
  top: -2px;
  height: 60%;
  width: 100%;
  color: #333;
  opacity: .5;
  ${props => props.isPressed && `
    color: #e08;
    opacity: 1;
  `}

  & b,
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    display: block;
    height: 2px;
    width: 100%;
    background: currentColor;
    border-radius: 4px;
    opacity: 1;

    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }

  &:before { top: 0; }
  & b { top: 50%; }
  &:after { top: 100%; }

  ${props => props.isPressed && cssIconPressed}
`;

export default class Btn extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.isPressed !== nextProps.isPressed) {
      return true;
    }
    return false;
  }

  // clickHandler = (e) => {
  //   // console.log(this.props);
  //   return (typeof this.props.onClick === 'function') && this.props.onClick(this.props, e);
  // };

  render() {
    return (
      <BtnWrap {...this.props} onClick={this.props.click} >
        <Icon isPressed={this.props.isPressed} >
          <b />
        </Icon>
      </BtnWrap>
    );
  }
}