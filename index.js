const logoInput = require('./lib/inq');
const svgInput = require('./lib/svg');

logoInput.logoPropmt()
  .then((answers) => {
    const {id, text, textColor, shape, shapeColor } = answers;
    svgInput.generateSVG(id, text, textColor, shape, shapeColor);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });


