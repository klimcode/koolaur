// import React from 'react';
import styled from 'styled-components';


export const H1 = styled.h1`
  ${p => p.theme.baseline(1, 56)};
  color: ${p => p.theme.colorHeaders};
  font-weight: bold;
`;

export const H2 = styled.h2`
  ${p => p.theme.baseline(1, 40)};
  color: ${p => p.theme.colorHeaders};
  font-weight: normal;
`;

export const H3 = styled.h3`
  ${p => p.theme.baseline(1, 32)};
  font-weight: normal;
`;
