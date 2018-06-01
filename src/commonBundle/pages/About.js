import React from 'react';
import styled from 'styled-components';
import { H1, H2 } from '../atoms/H';
import { P } from '../atoms/P';


const PageAbout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 128px;
`;
const Avatar = styled.img.attrs({ alt: '' })`
  border-radius: 50%;
  margin-top: 64px;
`;
const TextAbout = styled.div`
  max-width: 540px;
  text-align: left;

  & a:hover {
    color: ${p => p.theme.colorActive};
  }
`;


export default () => (
  <PageAbout>
    <Avatar src="/static/media/koolaur-min.jpg" />
    <TextAbout>
      <H1 gap>
        Hi there!
      </H1>
      <P>
        My name is Polina, I&apos;m an illustrator. <br />
        Currently reside in Krasnodar, Russia.
      </P>
      <P>
        Nowadays I mostly produce children&apos;s illustrations, comics, character design,
        Illustration via Photoshop and traditional methods such as drawing, painting. My preferred materials are colored pencil, watercolour, ink, but I also love to experiment with new materials.
      </P>

      <H2 gap>
        Contact
      </H2>
      <P>
        For any questions regarding work or just to say hi, <br />
        you can drop me a line via email: <a href="mailto:koolaur19@mail.ru">koolaur19@mail.ru</a>.
      </P>
      <P>
        Thanks for visiting my website,<br />
        Let&apos;s do something together!
      </P>
    </TextAbout>
  </PageAbout>
);
