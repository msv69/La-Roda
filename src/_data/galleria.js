const Image = require("@11ty/eleventy-img");
const { glob } = require("glob"); // Aggiungi questa dipendenza

module.exports = async function() {
  // Usa glob per trovare i file correttamente
  const imagePaths = await glob("./src/images/galleria/*.@(jpg|png)");
  
  return Promise.all(
    imagePaths.map(async (path) => {
      const stats = await Image(path, {
        formats: ["webp"],
        outputDir: "./_site/images/",
        filenameFormat: (id, src, width, format) => {
          const originalName = path.split('/').pop().split('.')[0];
          return `${originalName}-${width}w.${format}`;
        }
      });
      return stats.webp[0];
    })
  );
};