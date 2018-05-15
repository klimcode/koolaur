const getMetrics = (props) => {
  const { theme, component } = props;
  const {
    METRICS, METRICS_DEF, FF_DEF, FS_DEF,
  } = theme.fontMetrics;

  const themeGlobalFF = theme && theme.fontFamily;
  const themeComponent = theme && theme[component];

  const themeFontFamily = (themeComponent && themeComponent.fontFamily) || themeGlobalFF;
  const themeFontSize = themeComponent && themeComponent.fontSize;
  const themeGap = themeComponent && themeComponent.gap;
  const finalFontFamily = props.ff || themeFontFamily || FF_DEF;
  const finalFontSize = props.fs || themeFontSize || props.fontSizeDef || FS_DEF;


  const gap = ((props.gap || themeGap || props.gapDef) && ' gap') || '';
  const id = `${finalFontFamily}: ${finalFontSize}${gap}`;

  // debugger;
  const result = METRICS[id];
  /* eslint-disable no-console */
  if (!result && console && console.error) {
    console.error(`Font Metrics "${id}" for "${component}" component not found. Default Metrics used instead.`);
  }

  return result || METRICS_DEF || '';
};

export default getMetrics;
