import styled from 'styled-components';
import getBaselineStyles from './baseline';

export const P = styled.p`
  ${getBaselineStyles}
`;
P.defaultProps = {
  component: 'p',
  fontSizeDef: 16,
  gapDef: true,
};
