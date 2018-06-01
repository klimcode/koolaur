import fontMetrics from './font-metrics';

const baseline = (gapArg, fontSizeArg, fontFamilyArg) => {
  const {
    METRICS, METRICS_DEF, FF_DEF, FS_DEF,
  } = fontMetrics;


  const fontFamily = fontFamilyArg || FF_DEF;
  const fontSize = fontSizeArg || FS_DEF;
  const gap = (gapArg && ' gap') || '';
  const id = `${fontFamily}: ${fontSize}${gap}`;


  const result = METRICS[id];
  /* eslint-disable no-console */
  if (!result && console && console.error) {
    console.error(`Font Metrics "${id}" was not found. Default Metrics used instead.`);
  }

  return result || METRICS_DEF || '';
};

export default {
  color: '#333',
  colorHeaders: '#555',
  colorActive: 'rgba(255, 100, 150, .8)',
  hoverBackground: 'rgba(255, 100, 150, .4)',
  baseline,
};
