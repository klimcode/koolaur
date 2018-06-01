export const convertFilesToProjects = (files, urlBase, srcBase) => (
  files.map((item) => {
    const { name, desc } = item;
    const thumbSrc = srcBase + item.thumbSrc;
    const projectUrl = urlBase + name.replace(/[., '*:@!]/g, '-').toLowerCase();
    const originSrc = item.originSrc && item.originSrc.length
      ? item.originSrc.map(src => srcBase + src)
      : [thumbSrc.replace('-min', '')];

    return {
      name, desc, projectUrl, thumbSrc, originSrc,
    };
  })
);
