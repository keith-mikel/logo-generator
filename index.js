const logoInput = require('./lib/inq');
const svgInput = require('./lib/svg');

logoInput.logoPropmt()
  .then((answers) => {
    const { letters, textColor, shape, shapeColor } = answers;
    svgInput.generateSVG(letters, textColor, shape, shapeColor);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });


