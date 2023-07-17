const inquirer = require('inquirer');

//questions
function logoPropmt() {
  return inquirer.prompt([
    {
      type: 'input',
      message:'Enter a unique name for logo',
      name:'id',
      validate: validateId,
    },
    {
      type: 'input',
      message: 'Provide 3 Letters/Numbers for this logo',
      name: 'text',
      validate: validateText,
    },
    // text color
    {
      type: 'input',
      message: 'Enter a color for the logo text (hexidecimal or color name)',
      name: 'textColor',
      validate: validateColor
    },
    // shape selection
    {
      type: 'list',
      message: 'Select a shape for the logo background:',
      choices: ['Circle', 'Triangle', 'Square'],
      name: 'shape',
    },
    // shape color
    {
      type: 'input',
      message: 'Enter a color for the background shape',
      name: 'shapeColor',
      validate: validateColor
    },
  ]);
}

//assure logo has only 3 letters
const validateText = (input) => {
  if (input.length !== 3) {
    return 'Please enter exactly 3 letters.';
  }
  return true;
};


//assure ID does not contain any characters that would cause errors in file creation
const validateId = (input) => {
  if (/\s/.test(input)) {
    return 'The logo name should not contain spaces.';
  }
  if (/[\\/:\*\?"<>\|]/.test(input)) {
    return 'The logo name contains invalid characters.';
  }
  return true;
};

//assure color is a color
function validateColor(value) {
  // Regular expression to check if the input is a valid CSS color
  var colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^[a-zA-Z]+$|^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i;
  if (colorRegex.test(value)) {
    return true; // Input is a valid color
  } else {
    return 'Please enter a valid color'; // Input is not a valid color
  }
}

module.exports = {
  logoPropmt,
  validateColor,
  validateId,
  validateText,
};
