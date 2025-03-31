const Image = require("@11ty/eleventy-img");

module.exports = async () => {
  const files = globSync("./src/images/galleria/*.{jpg,png}");
  // Verifica che i percorsi siano corretti
  console.log(files); 
};


