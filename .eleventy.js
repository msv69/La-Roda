module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/admin");
    
    return {
      dir: {
        input: "src",
        includes: "includes",  // <-- Importante!
        output: "_site"
      }
    };
  };

