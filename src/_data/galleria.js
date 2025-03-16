const Image = require("@11ty/eleventy-img");

module.exports = async function() {
  let images = await Image("./src/images/galleria/*.{jpg,png}", {
    formats: ["webp"],
    outputDir: "./_site/images/"
  });

  return Object.values(images).map(img => ({
    url: img.webp[0].url,
    desc: img.webp[0].sourcePath.split('/').pop().replace(/-/g, ' ')
  }));
};