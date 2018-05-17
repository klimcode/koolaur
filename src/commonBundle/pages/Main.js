import React from 'react';
// import styled from 'styled-components';
import Gallery from '../templates/Gallery';
import { convertFilesToProjects } from '../atoms/functions';

// Crashes old mobile Safari !!!
// const images = require.context('../../../public/static/media', false, /\.(jpe?g|png)$/).keys();

const files = [
  {
    name: 'Annihilation',
    thumbSrc: 'annihilation-min.jpg',
    originSrc: [],
  },
];
const urlBase = '/';
const srcBase = '/static/media/';
const projects = convertFilesToProjects(files, urlBase, srcBase);

export default props => (
  <Gallery {...props} items={projects} urlBase={urlBase} />
);
