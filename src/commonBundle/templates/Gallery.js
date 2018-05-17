import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { minSm, minMd } from '../atoms/css';
import svgLoader from '../atoms/loader.svg';


const bgLoader = css`
  background: url(${svgLoader}) no-repeat center center;
`;
const ImageStyled = styled.div`
  display: inline-block;
  position: relative;
  ${p => p.outline && css`
    margin: ${p.outline};
    ${(p.outline < 0) && css`
      top: ${p.outline / 2};
      left: ${p.outline / 2};
    `}
  `}
  ${bgLoader}

  & img {
    max-width: 100%;
  }
`;
const Image = (props) => {
  const { src, alt, outline } = props;
  return (
    <ImageStyled outline={outline}>
      <img src={src} alt={alt || ''} />
    </ImageStyled>
  );
};


const Grid = styled.div`
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
    background: ${p => p.theme.hoverBackground};
    opacity: 0;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`;
const ProjectsList = (props) => {
  const { items } = props;
  return (
    <Grid>
      { items && items.map((item, i) => (
        <GridItem key={i}>
          <Link to={item.projectUrl}>
            <ProjectThumbnail>
              <Image src={item.thumbSrc} outline="-2px" />
              <ThumbnailOverlay>{item.name}</ThumbnailOverlay>
            </ProjectThumbnail>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};


const LinkStyled = styled(Link)`
  display: inline-block;
  text-decoration: none;
  width: ${p => p.width};

  & button {
    height: 64px;
    width: 100%;

    padding: 0;

    color: ${p => p.theme.color};
    font: inherit;
    line-height: normal;
    overflow: visible;
    background: none;
    border: 0;
    cursor: pointer;
    user-select: none;

    -webkit-appearance: none;
    -moz-appearance: none;
  }
  & button:focus {
    outline: none;
  }
  button:hover,
  button:focus {
    color: ${p => p.theme.colorActive};
  }
  & button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;
const LinkBtn = props => (
  <LinkStyled to={props.to || '/'} width={props.width}>
    <button>{props.text || 'text'}</button>
  </LinkStyled>
);


const FocusedWrapper = styled.div`
`;
const ImgOrigin = styled(Image).attrs({ alt: '' })`
  &:not(:first-child) {
    margin-top: 16px;
  }
`;
const Controls = styled.div`
  font-size: 18px;
`;
const ProjectFocused = (props) => {
  const { originSrc } = props.project;

  return (
    <FocusedWrapper>
      {originSrc.map((src, i) => <ImgOrigin src={src} key={i} />)}
      <Controls>
        <LinkBtn text="BACK TO GALLERY" width="100%" />
      </Controls>
    </FocusedWrapper>
  );
};


const PageWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
`;
export default (props) => {
  const { url } = props.match;
  const project = props.items.find(el => el.projectUrl === url);

  return (
    <PageWrapper>
      {project && <ProjectFocused project={project} />}
      {!project && <ProjectsList items={props.items} />}
    </PageWrapper>
  );
};
