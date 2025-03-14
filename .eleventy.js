module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/admin");
    
    return {
      dir: {
        input: "src",
        output: "_site"
      }
    };
  };