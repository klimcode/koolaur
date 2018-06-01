import styled from 'styled-components';

export const P = styled.p`
  ${p => p.theme.baseline(1, 16)}
`;
P.defaultProps = {
  component: 'p',
  fontSizeDef: 16,
  gapDef: true,
};
