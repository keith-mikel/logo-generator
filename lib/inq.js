const inquirer = require('inquirer');

function logoPropmt() {
  return inquirer.prompt([
    // 3 letters of text
    {
      type: 'input',
      message: 'Provide 3 Letters for this logo',
      name: 'letters',
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

module.exports = {
  logoPropmt,
};
