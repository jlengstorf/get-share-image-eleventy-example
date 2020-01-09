const getShareImage = require('@jlengstorf/get-share-image').default;

module.exports = eleventyConfig => {
  eleventyConfig.addLiquidShortcode('ogImage', (title, tagline) => {
    const image = getShareImage({
      title,
      tagline,
      cloudName: 'jlengstorf',
      imagePublicID: 'lwj/blog-post-card',
    });

    return `<meta property="og:image" content="${image}" />`;
  });
};
