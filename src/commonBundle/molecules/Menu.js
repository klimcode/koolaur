import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  cssBaseline,
  cssColorPrimary,
  fnInlineGap,
  minMd, maxMd,
  fnHide,
} from '../atoms/css';

import Hamburger from '../atoms/Hamburger';
import IconFacebook from '../atoms/icons/IconFacebook';
import IconInstagram from '../atoms/icons/IconInstagram';
import IconBehance from '../atoms/icons/IconBehance';
import IconEtsy from '../atoms/icons/IconEtsy';


const cssMenuOpened = css`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  padding-top: 64px;

  text-align: center;
  background: #eee;
`;
const MenuContent = styled.div`
  @media ${maxMd} {
    ${p => p.isOpened ? cssMenuOpened : 'display:none'}
  }
`;
const ContentWrapper = styled.div`
  @media ${maxMd} {
    height: 100%;
    max-width: 320px;
    margin: auto;
    overflow: auto;
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
  line-height: 96px;

  @media ${minMd} {
    padding: 16px 0;
    line-height: 32px;
    text-align: right;
  }
`;
const MenuLink = styled(Link)`
  display: block;
  text-transform: uppercase;
  text-decoration: none;

  font-size: 24px;
  line-height: 64px;

  ${cssColorPrimary}
  ${p => p.active && css`
    color: ${p => p.theme.colorActive};
  `};

  @media ${minMd} {
    ${cssBaseline}
    ${fnInlineGap()}
  }
`;
const SocialLink = styled(Link).attrs({ target: '_blank' })`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  height: 64px;
  ${p => p.width && `width: ${p.width * 2}px`};

  vertical-align: middle;

  ${cssColorPrimary}
  ${fnInlineGap()}

  &:hover {
    color: ${p => p.theme.colorActive};
  }

  @media ${minMd} {
    height: 32px;
    ${p => p.width && `width: ${p.width}px`};
  }
`;

const MenuBtnWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 8px;
  z-index: 100;

  ${fnHide('md')}
`;

export class Menu extends React.Component {
  state = { isOpened: false }

  handleClick = () => {
    // console.log(this.state);
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }

  render() {
    const openedMenuClick = () => (
      this.state.isOpened ? this.handleClick : (() => {})
    );
    return (
      <React.Fragment>
        <MenuBtnWrapper>
          <Hamburger isPressed={this.state.isOpened} click={this.handleClick} />
        </MenuBtnWrapper>
        <MenuContent isOpened={this.state.isOpened}>
          <ContentWrapper onClick={openedMenuClick()}>
            <List>
              {this.props.pages.map((page, i) => {
                const isCurrent = this.props.location.pathname === page.path;
                return <MenuLink to={page.path} active={+isCurrent} key={i}>{page.name}</MenuLink>
              })}
            </List>
            <Socials>
              <SocialLink to="https://www.instagram.com/koolaur/"><IconInstagram /></SocialLink>
              <SocialLink to="https://www.facebook.com/Koolaur"><IconFacebook /></SocialLink>
              <SocialLink to="https://www.behance.net/polina_kli3191"><IconBehance /></SocialLink>
              <SocialLink to="https://www.etsy.com/shop/KoolaurStore" width="50"><IconEtsy /></SocialLink>
            </Socials>
          </ContentWrapper>
        </MenuContent>
      </React.Fragment>
    );
  }
}
