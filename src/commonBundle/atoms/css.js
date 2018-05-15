import { css } from 'styled-components';
import getBaselineStyles from './baseline';
import { media } from './defaults';

const cssHiddenMd = css`
  @media (min-width: ${p => (p.theme.media && p.theme.media.md) || media.md}) {
    display: none;
  }
`;
const cssHiddenLg = css`
  @media (min-width: ${p => (p.theme.media && p.theme.media.lg) || media.lg}) {
    display: none;
  }
`;
export const cssMedia = css`
  ${p =>
    (p.hidden_lg && cssHiddenLg) ||
    (p.hidden_md && cssHiddenMd)
}
`;

export const cssColorPrimary = css`
  color: ${p => p.theme.color || '#000000'};
`;
export const cssBaseline = css`
  ${getBaselineStyles}
`;


export const fnHideMinScreen = threshold => css`
  @media (min-width: ${threshold}px) {
    display: none;
  }
`;
export const fnInlineGapDesktop = gap => css`
  @media (min-width: ${p => p.theme.screenLarge}) {
    margin-left: ${gap || 16}px;

    &:first-child {
      margin-left: 0;
    }
  }
`;
