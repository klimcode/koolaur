import { css } from 'styled-components';
import swtch from 'brief-switch';
import { media as mediaDef } from '../defaults';


const getMediaBreakpoint = minmax => size => (props) => {
  const themeMedia = props.theme && props.theme.media && props.theme.media[size];
  return `(${minmax}-width: ${(themeMedia || mediaDef[size]) - 1}px)`;
};
export const minSm = getMediaBreakpoint('min')('sm');
export const maxSm = getMediaBreakpoint('max')('sm');
export const minMd = getMediaBreakpoint('min')('md');
export const maxMd = getMediaBreakpoint('max')('md');
export const minLg = getMediaBreakpoint('min')('lg');
export const maxLg = getMediaBreakpoint('max')('lg');
const cssHideLg = css`@media ${minLg} {display: none;}`;
const cssHideMd = css`@media ${minMd} {display: none;}`;
const cssHideSm = css`@media ${minSm} {display: none;}`;
const cssHideMaxLg = css`@media ${maxLg} {display: none;}`;
const cssHideMaxMd = css`@media ${maxMd} {display: none;}`;
const cssHideMaxSm = css`@media ${maxSm} {display: none;}`;
export const cssHideByProps = css`
  ${p =>
    (p.hide_lg && cssHideLg) ||
    (p.hide_md && cssHideMd) ||
    (p.hide_sm && cssHideSm) ||
    (p.hide_max_sm && cssHideMaxSm) ||
    (p.hide_max_md && cssHideMaxMd) ||
    (p.hide_max_lg && cssHideMaxLg)
}
`;
export const fnHide = size => (
  swtch(size, [
    'lg', cssHideLg,
    'md', cssHideMd,
    'sm', cssHideSm,
    'max_lg', cssHideMaxLg,
    'max_md', cssHideMaxMd,
    'max_sm', cssHideMaxSm,
  ])
);

export const cssColorPrimary = css`
  color: ${p => p.theme.color || '#000000'};
`;
export const cssBaseline = css`
  ${p => p.theme.baseline(0, 16)}
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
