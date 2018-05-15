import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  cssBaseline,
  cssColorPrimary,
  fnInlineGapDesktop,
} from '../atoms/css';

import Hamburger from '../atoms/Hamburger';
import { IconFacebook, IconInstagram, IconBehance } from '../atoms/icons';


const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const List = styled.div`
  display: flex;
  justify-content: space-between;
  order: 1;
`;
const Socials = styled.div`

  @media (min-width: ${p => p.theme.screenLarge}) {
    text-align: right;
    padding: 16px 0;
  }
`;
const MenuLink = styled(Link)`
  display: block;
  color: blue;
  text-transform: uppercase;
  text-decoration: none;

  ${cssColorPrimary}
  ${cssBaseline}
  ${fnInlineGapDesktop(16)}
`;
const SocialLink = styled(Link)`
  display: inline-block;
  height: 32px;

  ${cssColorPrimary}
  ${fnInlineGapDesktop(16)}
`;


export class Menu extends React.Component {
  isOpened = false;

  render() {
    return (
      <React.Fragment>
        <Hamburger hidden_lg isPressed={this.props.isInnerPage} />
        <MenuContent>
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
