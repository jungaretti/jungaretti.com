module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addWatchTarget("src/css");

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addWatchTarget("src/assets");

  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addWatchTarget("src/favicon.ico");

  return {
    dir: {
      input: "src",
      output: "build",
    },
  };
};
