import { css } from 'styled-components';
import baseline from './font-metrics';


export default {
  color: '#333',
  colorHeaders: '#555',
  colorActive: 'rgba(255, 100, 150, .8)',
  hoverBackground: 'rgba(255, 100, 150, .4)',
  baseline,


  // color: {},
  bg: {
    first: '#eee',
  },
  h1: css`
    ${baseline(1, 40)};
    color: red;
  `,
};
