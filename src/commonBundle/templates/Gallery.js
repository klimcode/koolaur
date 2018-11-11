import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';


const Image = ({ src, alt, outline }) => (
  <S.ImageStyled outline={outline}>
    <img src={src} alt={alt || ''} />
  </S.ImageStyled>
);


const ProjectsList = ({ items }) => (
  <S.Grid>
    { items && items.map((item, i) => (
      <S.GridItem key={i}>
        <Link to={item.projectUrl}>
          <S.ProjectThumbnail>
            <Image src={item.thumbSrc} outline="-2px" />
            <S.ThumbnailOverlay>{item.name}</S.ThumbnailOverlay>
          </S.ProjectThumbnail>
        </Link>
      </S.GridItem>
    ))}
  </S.Grid>
);


const LinkBtn = props => (
  <S.LinkStyled to={props.to || '/'} width={props.width}>
    <button>{props.text || 'text'}</button>
  </S.LinkStyled>
);


const ProjectFocused = (props) => {
  const { originSrc, name, desc } = props.project;
  const html = () => (
    (typeof desc === 'string')
      ? {
        __html: desc
          .replace(/\n/g, '<br>')
          .replace(/@([\w.]*)@/g, '<a target="_blank" href="https://www.instagram.com/$1/">@$1</a>'),
      }
      : null
  );

  return (
    <S.FocusedWrapper>
      {originSrc.map((src, i) => <S.ImgOrigin src={src} key={i} />)}
      <S.Heading>{name}</S.Heading>
      <S.Description dangerouslySetInnerHTML={html(desc)} />
      <S.Controls>
        <LinkBtn text="BACK TO GALLERY" width="100%" />
      </S.Controls>
    </S.FocusedWrapper>
  );
};


export default (props) => {
  const { url } = props.match;
  const project = props.items.find(el => el.projectUrl === url);

  return (
    <S.PageWrapper>
      {project && <ProjectFocused project={project} />}
      {!project && <ProjectsList items={props.items} />}
    </S.PageWrapper>
  );
};
