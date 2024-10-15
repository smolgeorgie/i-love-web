module.exports = function(eleventyConfig) {
  // Return your Object options:
  return {
    dir: {
      input: "src", // default is "."
      output: "_site" // default is "_site"
    }
  }
};

//Pass through files
eleventyConfig.addPassthroughCopy('./src/style.css');