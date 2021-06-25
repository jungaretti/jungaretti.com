module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addWatchTarget("src/css");
  
  return {
    dir: {
      input: "src",
      output: "build",
    }
  };
};
