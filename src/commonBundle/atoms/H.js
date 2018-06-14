import styled, { css } from 'styled-components';

const base = (gap, fontSize, fontFamily) => css`
  ${p => p.theme.baseline(gap, fontSize || 56, fontFamily)};
`;

export const H1 = styled.h1`
  ${p => p.theme.h1};
`;

export const H2 = styled.h2`
  ${p => p.theme.baseline(1, 40)};
  color: ${p => p.theme.colorHeaders};
  font-weight: normal;
`;

export const H3 = styled.h3`
  ${p => p.theme.baseline(1, 32)};
  ${p => p.css};
  font-weight: normal;
`;
