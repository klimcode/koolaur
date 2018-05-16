import React from 'react';
// import styled from 'styled-components';
import Gallery from '../templates/Gallery';

// Crashes old mobile Safari !!!
const images = require.context('../../../public/static/media', false, /\.(jpe?g|png)$/).keys();


const projects = images
  .filter(item => item.includes('-min'))
  .map((item) => {
    const fileName = item.slice(2);
    const thumbSrc = `/static/media/${fileName}`;
    const imgSrc = thumbSrc.replace('-min', '');
    const url = fileName.replace(/\..*/, '').replace('-min', '');
    const name = url.replace('-', ' ');
    return {
      name, thumbSrc, imgSrc, url: `/${url}`,
    };
  });

export default props => (
  <Gallery {...props} items={projects} />
);
