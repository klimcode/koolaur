import { css } from 'styled-components';
import getBaselineStyles from './baseline';
import { media as mediaDef } from './defaults';


const getMedia = minmax => size => (props) => {
  const themeMedia = props.theme && props.theme.media && props.theme.media[size];
  return `(${minmax}-width: ${(themeMedia || mediaDef[size]) - 1}px)`;
};
export const minSm = getMedia('min')('sm');
export const maxSm = getMedia('max')('sm');
export const minMd = getMedia('min')('md');
export const maxMd = getMedia('max')('md');
export const minLg = getMedia('min')('lg');
const cssHiddenMd = css`
  @media ${minMd} {
    display: none;
  }
`;
const cssHiddenLg = css`
  @media ${minLg} {
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
export const fnInlineGap = gap => css`
  margin-left: ${gap || 16}px;

  &:first-child {
    margin-left: 0;
  }
`;
