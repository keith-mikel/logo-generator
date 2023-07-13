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
      message: 'Enter a color for the logo text',
      name: 'textColor',
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

module.exports = {
  logoPropmt,
};
