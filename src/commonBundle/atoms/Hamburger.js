import React from 'react';
import styled, { css } from 'styled-components';
import { cssMedia } from './css';


const BtnWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  height: 64px;
  padding: 8px;
  width: 64px;

  cursor: ${props => props.isPressed ? 'pointer' : 'default'};
  transform: rotate(0deg);
  transition: .5s ease-in-out;

  ${cssMedia}
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
  color: #aaa;
  opacity: .5;
  ${props => props.isPressed && `
    color: #268;
    opacity: 1;
  `}

  & b,
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    display: block;
    height: 3px;
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

  clickHandler = e => (
    (typeof this.props.onClick === 'function') && this.props.onClick(this.props, e)
  );

  render() {
    return (
      <BtnWrap onClick={this.clickHandler} {...this.props}>
        <Icon {...this.props}>
          <b />
        </Icon>
      </BtnWrap>
    );
  }
}