module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  // Return your Object options:
  return {
    dir: {
      input: "src", // default is "."
      output: "_site", // default is "_site"
    },
  };
};