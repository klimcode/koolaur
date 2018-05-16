// import React from 'react';
import styled from 'styled-components';
import src from './logo-koolaur.svg';
import { maxMd } from '../atoms/css';


export default styled.img.attrs({ src })`
  height: 80px;

  @media ${maxMd} {
    height: 64px;
    padding: 0 16px 12px;
    margin-top: -12px;
  }
`;
