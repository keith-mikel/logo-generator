// import fs
const fs = require('fs');

function generateSVG(text, textColor, shape, shapeColor) {
  // Plug in the provided data
  const svgContent = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <${shape.toLowerCase()} cx="150" cy="100" r="80" fill="${shapeColor.toLowerCase()}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor.toLowerCase()}">${text}</text>
    </svg>
  `;

  // Writing the SVG content to a file
  fs.writeFile('logo.svg', svgContent, (err) => {
    if (err) throw err;
    console.log('SVG file generated!');
  });
}

module.exports = {
  generateSVG,
};
