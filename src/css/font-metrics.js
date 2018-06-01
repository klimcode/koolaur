const FS_DEF = 16;
const FF_DEF = 'Open Sans';
const METRICS_DEF = `
  padding: 0 0 7px 0;
  margin: -7px 0 0 0;
  font-size: 16px;
  line-height: 32px;
`;
const METRICS = {
  'Open Sans: 12': `
    margin: 0 0 -3px;
    padding: 3px 0 0;
    font-size: 12px;
    line-height: 16px;
  `,
  'Open Sans: 12 gap': `
    margin: 0 0 -3px;
    padding: 19px 0 0;
    font-size: 12px;
    line-height: 16px;
  `,

  'Open Sans: 14': `
    margin: 0 0 -2px;
    padding: 2px 0 0;
    font-size: 14px;
    line-height: 16px;
  `,
  'Open Sans: 14 gap': `
    margin: 0 0 -2px;
    padding: 18px 0 0;
    font-size: 14px;
    line-height: 16px;
  `,

  'Open Sans: 16': `
    margin: -6px 0 0;
    padding: 0 0 6px;
    font-size: 16px;
    line-height: 32px;
  `,
  'Open Sans: 16 gap': `
    margin: 0;
    padding: 26px 0 6px;
    font-size: 16px;
    line-height: 32px;
  `,

  'Open Sans: 18': `
    margin: -7px 0 0;
    padding: 0 0 7px;
    font-size: 18px;
    line-height: 32px;
  `,
  'Open Sans: 18 gap': `
    margin: 0;
    padding: 25px 0 7px;
    font-size: 18px;
    line-height: 32px;
  `,

  'Open Sans: 20': `
    margin: -8px 0 0;
    padding: 0 0 8px;
    font-size: 20px;
    line-height: 32px;
  `,
  'Open Sans: 20 gap': `
    margin: 0;
    padding: 24px 0 8px;
    font-size: 20px;
    line-height: 32px;
  `,

  'Open Sans: 24': `
    margin: -10px 0 0;
    padding: 0 0 10px;
    font-size: 24px;
    line-height: 32px;
  `,
  'Open Sans: 24 gap': `
    margin: 0;
    padding: 22px 0 10px;
    font-size: 24px;
    line-height: 32px;
  `,

  'Open Sans: 32': `
    margin: 0 0 -3px;
    padding: 3px 0 0;
    font-size: 32px;
    line-height: 64px;
  `,
  'Open Sans: 32 gap': `
    margin: 0 0 -3px;
    padding: 67px 0 0;
    font-size: 32px;
    line-height: 64px;
  `,

  'Open Sans: 40': `
    margin: 0px 0 0;
    padding: 0 0 0px;
    font-size: 40px;
    line-height: 64px;
  `,
  'Open Sans: 40 gap': `
    margin: 0;
    padding: 64px 0 0px;
    font-size: 40px;
    line-height: 64px;
  `,

  'Open Sans: 48': `
    margin: -3px 0 0;
    padding: 0 0 3px;
    font-size: 48px;
    line-height: 64px;
  `,
  'Open Sans: 48 gap': `
    margin: 0;
    padding: 61px 0 3px;
    font-size: 48px;
    line-height: 64px;
  `,

  'Open Sans: 56': `
    margin: -6px 0 0;
    padding: 0 0 6px;
    font-size: 56px;
    line-height: 64px;
  `,
  'Open Sans: 56 gap': `
    margin: 0;
    padding: 58px 0 6px;
    font-size: 56px;
    line-height: 64px;
  `,

  'Open Sans: 64': `
    margin: -9px 0 0;
    padding: 0 0 9px;
    font-size: 64px;
    line-height: 64px;
  `,
  'Open Sans: 64 gap': `
    margin: 0;
    padding: 55px 0 9px;
    font-size: 64px;
    line-height: 64px;
  `,
};

export default {
  METRICS, METRICS_DEF, FF_DEF, FS_DEF,
};
