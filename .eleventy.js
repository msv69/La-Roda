const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  // Plugin Immagini
  eleventyConfig.addPlugin(Image, {
    formats: ["webp"],
    urlPath: "/images/",
    outputDir: "./_site/images/"
  });

  // Pass-through files
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/scripts");
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};


