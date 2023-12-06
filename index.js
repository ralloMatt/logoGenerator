// Import classes
const Shape = require('./lib/shape.js');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');

const inquirer = require('inquirer'); // get inquirer accesse
const maxLengthInputPrompt = require('inquirer-maxlength-input-prompt'); // used so I can have a max length of characters inputed
inquirer.registerPrompt('maxlengthInput', maxLengthInputPrompt); // used so I can have a max length of characters inputed 

const getLogoInfo = () => { // use inquirer to make a prompt, so I can ask get logo information
    return inquirer.prompt ([
        {
            type: 'maxlengthInput', 
            name: 'text',
            message: 'Enter the text you want for your logo (max three characters):',
            maxLength: '3',
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter the color of the text you would like (Hexadecial or Color Keyword):',
        },
        {
            type: 'list', 
            name: 'shape',
            message: 'What shape would you like? (Please select one)',
            choices: ['Circle', 'Square', 'Triangle'],
        },
    ]);
}

// Initialize the app
function init() {
    getLogoInfo() // Inquirer prompt
        .then((answers) => { // answers is the response given after running the prompt
            // Create Shape Object


            // Write to file

        });
}

// Function call to initialize app
init();
