const Image = require("@11ty/eleventy-img");

module.exports = async function() {
  try {
    const images = await Image("./src/images/galleria/*.{jpg,png}", {
      formats: ["webp"],
      outputDir: "./_site/images/",
      filenameFormat: (id, src, width, format) => {
        const originalName = src.split('/').pop().split('.')[0];
        return `${originalName}-${width}w.${format}`;
      }
    });

    return Object.values(images).flatMap(format => format);
  } catch (error) {
    console.error("Errore nel processing immagini:", error);
    return [];
  }
};