import React from 'react';
// import styled from 'styled-components';
import Gallery from '../templates/Gallery';
import { convertFilesToProjects } from '../atoms/functions';

// Crashes old mobile Safari !!!
// const images = require.context('../../../public/static/media', false, /\.(jpe?g|png)$/).keys();

const files = [
  { name: 'Annihilation', thumbSrc: 'annihilation-min.jpg' },
  { name: 'A quiet place', thumbSrc: 'a-quiet-place-min.jpg' },
  { name: 'A witch', thumbSrc: 'witch-min.jpg' },
  { name: 'Mary and a Witch\'s flower', thumbSrc: 'mary-min.jpg' },
  { name: 'Koolaur', thumbSrc: 'koolaur-min.jpg' },
  { name: 'Sea', thumbSrc: 'sea-min.jpg' },
  { name: 'Sweet river', thumbSrc: 'sweet-rivers-min.jpg' },
  { name: 'A Parisian naturalist', thumbSrc: 'naturalist-min.jpg' },
  { name: 'Must be a Weasley', thumbSrc: 'weasley-min.jpg' },
  { name: 'A secret', thumbSrc: 'a-secret-min.jpg' },
  { name: 'Festive forest', thumbSrc: 'festive-forest-min.jpg' },
  { name: 'Happy Christmas', thumbSrc: 'happy-cristmas-min.jpg' },
  { name: 'A Harry Potter movie', thumbSrc: 'hp-min.jpg' },
  {
    name: 'Letters vol. 1',
    thumbSrc: 'letters-1-min.jpg',
    originSrc: ['letters/l-1-01.jpg', 'letters/l-1-02.jpg', 'letters/l-1-03.jpg', 'letters/l-1-04.jpg', 'letters/l-1-05.jpg', 'letters/l-1-06.jpg'],
  },
  {
    name: 'Letters vol. 2',
    thumbSrc: 'letters-2-min.jpg',
    originSrc: ['letters/l-2-01.jpg', 'letters/l-2-02.jpg', 'letters/l-2-03.jpg', 'letters/l-2-04.jpg', 'letters/l-2-05.jpg', 'letters/l-2-06.jpg', 'letters/l-2-07.jpg', 'letters/l-2-08.jpg'],
  },
  { name: 'Luna Lovegood', thumbSrc: 'luna-min.jpg' },
  { name: 'Music', thumbSrc: 'music-min.jpg' },
  { name: 'Sky may fall', thumbSrc: 'sky-min.jpg' },
  { name: 'Sunrise', thumbSrc: 'sunrise-min.jpg' },
  { name: 'Video games', thumbSrc: 'video-games-min.jpg' },
  // { name: '', thumbSrc: '' },
];
const urlBase = '/';
const srcBase = '/static/media/';
const projects = convertFilesToProjects(files, urlBase, srcBase);

export default props => (
  <Gallery {...props} items={projects} urlBase={urlBase} />
);
