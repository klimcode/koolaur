import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { minSm, minMd } from '../atoms/css';


const ImageStyled = styled.div`
  margin: -2px;

  & img {
    max-width: 100%;
  }
`;
const Image = props => (
  <ImageStyled>
    <img src={props.src} alt={props.alt || ''} />
  </ImageStyled>
);


const ProjectThumbnail = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
`;
const ThumbnailOverlay = styled.button`
  display: none;

  @media ${minMd} {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    color: #fff;
    font-size: 24px;
    background: rgba(255, 100, 180, .8);
    opacity: 0;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`;
const ProjectPreview = props => (
  <Link to={props.item.projectUrl}>
    <ProjectThumbnail>
      <Image src={props.item.thumbSrc} alt="" />
      <ThumbnailOverlay>{props.item.name}</ThumbnailOverlay>
    </ProjectThumbnail>
  </Link>
);


const ProjectsListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const GridItem = styled.div`
  box-sizing: border-box;
  padding: 2px;
  width: 50%;

  @media ${minSm} {
    width: 33.3334%;
  }
`;
const ProjectsList = props => (
  <ProjectsListStyled>
    { props.items && props.items.map((item, i) => (
      <GridItem key={i}>
        <ProjectPreview item={item} />
      </GridItem>
    ))}
  </ProjectsListStyled>
);


const FocusedWrapper = styled.div`
  padding-bottom: 32px;
`;
const ProjectFocused = (props) => {
  const { originSrc } = props.project[0]; // TEMP !

  return (
    <FocusedWrapper>
      {/* <Link to="/">BACK</Link> */}
      <img src={originSrc} alt="" />
    </FocusedWrapper>
  );
};


const PageWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 64px;
`;
export default (props) => {
  const { url } = props.match;
  const { projectOpened } = props.match.params;
  const project = props.items.find(el => el.projectUrl === url);

  return (
    <PageWrapper>
      {projectOpened && <ProjectFocused project={project} />}
      <ProjectsList items={props.items} />
    </PageWrapper>
  );
};
