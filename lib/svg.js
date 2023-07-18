const fs = require('fs')
const path = require('path');

function generateSVG(id, text, textColor, shape, shapeColor) {
  let shapeElement;
  let textX;
  let textY;
//switch for different shapes 
  switch (shape.toLowerCase()) {
    case 'circle':
      shapeElement = `<circle cx="150" cy="100" r="80" fill="${shapeColor.toLowerCase()}" />`;
      textX = 150;
      textY = 100;
      break;
    case 'square':
      shapeElement = `<rect x="70" y="40" width="160" height="160" fill="${shapeColor.toLowerCase()}" />`;
      textX = 150;
      textY = 120; 
      break;
    case 'triangle':
      shapeElement = `<polygon points="150 40 230 200 70 200" fill="${shapeColor.toLowerCase()}" />`;
      textX = 150;
      textY = 155; 
      break;
    default:
      throw new Error('Invalid shape provided.');
  }

  // Plug in the provided data
  const svgContent = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeElement}
      <text x="${textX}" y="${textY}" font-size="50" text-anchor="middle" alignment-baseline="middle" fill="${textColor.toLowerCase()}">${text}</text>
    </svg>
  `;
  
  fs.writeFile(`./Logos/${id}.svg`, svgContent, (err) => {
    if (err) throw err;
    console.log('SVG file generated and saved in the Logos folder!');
  });
}



module.exports = {
  generateSVG,
};
