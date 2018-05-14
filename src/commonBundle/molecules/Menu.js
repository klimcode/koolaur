import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { cssBaseline } from 'react-sc-atoms-set';

import { Hamburger } from '../atoms';

const inlineGap = gap => css`
  @media (min-width: ${p => p.theme.screenLarge}) {
    margin-left: ${gap || 16}px;

    &:first-child {
      margin-left: 0;
    }
  }`;

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
  }
`;
const MenuLink = styled(Link)`
  display: block;
  color: blue;
  text-transform: uppercase;

  ${cssBaseline}
  ${inlineGap(16)}
`;
const SocialLink = styled(Link)`
  display: block;
  color: red;

  ${cssBaseline}
  ${inlineGap(16)}
`;
SocialLink.defaultProps = {
  component: 'socialLink',
};

export default class Menu extends React.Component {
  isOpened = false;

  render() {
    return (
      <React.Fragment>
        <Hamburger isPressed={this.props.isInnerPage} />
        <MenuContent>
          <List>
            {this.props.pages.map((page, i) => (
              <MenuLink to={page.path} key={i}>{page.name}</MenuLink>
            ))}
          </List>
          <Socials>
            <SocialLink to="/">Instagram</SocialLink>
          </Socials>
        </MenuContent>
      </React.Fragment>
    );
  }
}
