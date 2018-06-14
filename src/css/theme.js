import { css } from 'styled-components';
import baseline from './font-metrics';


const colorHeaders = '#555';

export default {
  color: '#333',
  colorHeaders,
  colorActive: 'rgba(255, 100, 150, .8)',
  hoverBackground: 'rgba(255, 100, 150, .4)',
  baseline,

  bg: {
    first: '#eee',
  },
  cssH1: css`
    ${baseline(1, 40)};
    color: ${colorHeaders};
  `,
  cssH2: css`
    ${baseline(1, 32)};
    color: ${colorHeaders};
    font-weight: normal;
  `,
};
