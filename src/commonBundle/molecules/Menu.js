import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  cssBaseline,
  cssColorPrimary,
  fnInlineGap,
  minMd, maxMd,
} from '../atoms/css';

import Hamburger from '../atoms/Hamburger';
import IconFacebook from '../atoms/icons/IconFacebook';
import IconInstagram from '../atoms/icons/IconInstagram';
import IconBehance from '../atoms/icons/IconBehance';


const cssMenuOpened = css`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  padding: 128px 0 64px;

  text-align: center;
  background: #eee;
`;
const MenuContent = styled.div`
  @media ${maxMd} {
    ${p => p.isOpened ? cssMenuOpened : 'display:none'}
  }
  @media ${minMd} {
    display: flex;
    flex-direction: column;
  }
`;
const List = styled.div`
  @media ${minMd} {
    display: flex;
    justify-content: space-between;
    order: 1;
  }
`;
const Socials = styled.div`
  padding-top: 32px;

  @media ${minMd} {
    text-align: right;
    padding: 16px 0;
  }
`;
const MenuLink = styled(Link)`
  display: block;
  text-transform: uppercase;
  text-decoration: none;

  font-size: 24px;
  line-height: 64px;

  ${cssColorPrimary}

  @media ${minMd} {
    ${cssBaseline}
    ${fnInlineGap()}
  }
`;
const SocialLink = styled(Link)`
  display: inline-block;
  height: 64px;

  ${cssColorPrimary}
  ${fnInlineGap()}

  @media ${minMd} {
    height: 32px;
  }
`;


export class Menu extends React.Component {
  state = { isOpened: false }

  handleClick = () => {
    // console.log(this.state);
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }

  render() {
    return (
      <React.Fragment>
        <Hamburger hidden_md isPressed={this.state.isOpened} click={this.handleClick} />
        <MenuContent isOpened={this.state.isOpened}>
          <List>
            {this.props.pages.map((page, i) => (
              <MenuLink to={page.path} key={i}>{page.name}</MenuLink>
            ))}
          </List>
          <Socials>
            <SocialLink to="/"><IconInstagram /></SocialLink>
            <SocialLink to="/"><IconFacebook /></SocialLink>
            <SocialLink to="/"><IconBehance /></SocialLink>
          </Socials>
        </MenuContent>
      </React.Fragment>
    );
  }
}
