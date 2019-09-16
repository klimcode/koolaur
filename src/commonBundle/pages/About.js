import React from "react";
import styled from "styled-components";
import { H1, H2 } from "../atoms/H";
import { P } from "../atoms/P";

const PageAbout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 128px;
`;
const Avatar = styled.img.attrs({ alt: "" })`
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
      <H1>Hi there!</H1>
      <P>My name is Polina and I&apos;m an illustrator​ based in Amsterdam.</P>
      <P>
        Nowadays I mostly produce illustrations for books and social media,
        comics, portraits and character design.
      </P>
      <P>
        Represented by{" "}
        <a
          href="http://astound.us/publishing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Astound agency, UK
        </a>
        .
      </P>
      <P>
        For creating my works I use Adobe Photoshop and traditional methods such
        as drawing and painting. My preferred materials are coloured pencils,
        watercolour, gouache, but I also love to experiment!
      </P>

      <H2 gap>Contact</H2>
      <P>
        For any questions regarding work or just to say hi, <br />
        you can drop me a line via email:{" "}
        <a href="mailto:koolaur@gmail.com">koolaur@gmail.com</a>.
      </P>
      <P>
        Thanks for visiting my website,
        <br />
        Let&apos;s do something together!
      </P>
    </TextAbout>
  </PageAbout>
);
