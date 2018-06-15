import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { minSm, minMd } from '../atoms/css';
import svgLoader from '../atoms/loader.svg';
import { P } from '../atoms/P';
import { H2 } from '../atoms/H';


const bgLoader = css`
  background: url(${svgLoader}) no-repeat center center;
`;
export const ImageStyled = styled.div`
  display: inline-block;
  position: relative;
  min-height: 140px;
  min-width: 140px;

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


export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const GridItem = styled.div`
  box-sizing: border-box;
  padding: 2px;
  width: 50%;

  @media ${minSm} {
    width: 33.3334%;
  }
`;


export const ProjectThumbnail = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
  text-align: center;
`;
export const ThumbnailOverlay = styled.button`
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


export const LinkStyled = styled(Link)`
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
    background: none;
    outline: none;
  }
  & button:hover {
    color: ${p => p.theme.colorActive};
    background: none;
    outline: none;
  }
  & button::-moz-focus-inner {
    padding: 0;
    background: none;
    border: 0;
  }
`;


export const FocusedWrapper = styled.div`
  text-align: center;
`;
export const ImgOrigin = styled.img.attrs({ alt: '' })`
  &:not(:first-child) {
    margin-top: 16px;
  }
`;
export const Heading = styled(H2)``;
export const Description = styled(P)`
  max-width: 640px;
  margin: auto;
  text-align: left;
`;
export const Controls = styled.div`
  font-size: 18px;
`;


export const PageWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
`;
