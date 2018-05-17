
export const convertFilesToProjects = (files, urlBase, srcBase) => (
  files.map((item) => {
    const { name } = item;
    const thumbSrc = srcBase + item.thumbSrc;
    const projectUrl = urlBase + name.replace(/[., '*:@!]/, '-').toLowerCase();
    const originSrc = item.originSrc.length
      ? item.originSrc
      : [thumbSrc.replace('-min', '')];

    return {
      name, projectUrl, thumbSrc, originSrc,
    };
  })
);
