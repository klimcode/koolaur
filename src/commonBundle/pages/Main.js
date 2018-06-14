import React from 'react';
// import styled from 'styled-components';
import Gallery from '../templates/Gallery';
import { convertFilesToProjects } from '../atoms/functions';
import files from '../filesList';


const urlBase = '/';
const srcBase = '/static/media/';
const projects = convertFilesToProjects(files, urlBase, srcBase);

export default props => (
  <Gallery {...props} items={projects} urlBase={urlBase} />
);
