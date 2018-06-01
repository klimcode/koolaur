import React from 'react';
// import styled from 'styled-components';
import Gallery from '../templates/Gallery';
import { convertFilesToProjects } from '../atoms/functions';

// Loads images automatically but Crashes old mobile Safari !!!
// const images = require.context('../../../public/static/media', false, /\.(jpe?g|png)$/).keys();

const files = [
  { name: 'The princess of Tea Ceremonies', thumbSrc: 'princess-tea-min.jpg', desc: 'This girl is an forest elf. Some think she is a witch, and because she is not necessarily good or bad, that is not the strangest idea to consider.' },
  { name: 'Princess of Soft Blankets', thumbSrc: 'princess-blankets-min.jpg', desc: 'The princess of blankets, the lady of pillows, and the heroine of those who are having nightmares. These are just a couple of names gives to this fearsome lady. She has slain many monsters with just a swing or her magical pillow. The blanket she is wearing has the power of flight and also functions as protective armor. Unknown to most people is that she also wears magical socks. These socks might seem innocent but they are responsible for her swiftness and never-ending energy ✨ So, if you ever have terrible nightmares again, you know who to call!' },
  { name: 'The Prince who Grows Moss', thumbSrc: 'prince-moss-min.jpg' },
  { name: 'The princess of Beetles and Butterflies', thumbSrc: 'princess-beetles-min.jpg' },
  { name: 'The Princess of Cozy Yarn', thumbSrc: 'princess-yarn-min.jpg' },
  { name: 'The Lantern Guardian Princess', thumbSrc: 'princess-lantern-min.jpg' },
  { name: 'A quiet place', thumbSrc: 'a-quiet-place-min.jpg' },
  { name: 'Annihilation', thumbSrc: 'annihilation-min.jpg' },
  { name: 'A witch', thumbSrc: 'witch-min.jpg' },
  { name: 'Mary and a Witch\'s flower', thumbSrc: 'mary-min.jpg' },
  { name: 'Koolaur', thumbSrc: 'koolaur-min.jpg' },
  { name: 'Sea', thumbSrc: 'sea-min.jpg' },
  { name: 'A Parisian naturalist', thumbSrc: 'naturalist-min.jpg' },
  { name: 'Happy Christmas', thumbSrc: 'happy-cristmas-min.jpg' },
  { name: 'Must be a Weasley', thumbSrc: 'weasley-min.jpg' },
  { name: 'Luna Lovegood', thumbSrc: 'luna-min.jpg' },
  { name: 'A Harry Potter movie', thumbSrc: 'hp-min.jpg' },
  { name: 'Music', thumbSrc: 'music-min.jpg' },
  { name: 'Video games', thumbSrc: 'video-games-min.jpg' },
  { name: 'Sweet river', thumbSrc: 'sweet-rivers-min.jpg' },
  { name: 'A secret', thumbSrc: 'a-secret-min.jpg' },
  { name: 'Festive forest', thumbSrc: 'festive-forest-min.jpg' },
  { name: 'Sunrise', thumbSrc: 'sunrise-min.jpg' },
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
  { name: 'Sky may fall', thumbSrc: 'sky-min.jpg' },
  // { name: '', thumbSrc: '' },
];
const urlBase = '/';
const srcBase = '/static/media/';
const projects = convertFilesToProjects(files, urlBase, srcBase);

export default props => (
  <Gallery {...props} items={projects} urlBase={urlBase} />
);
