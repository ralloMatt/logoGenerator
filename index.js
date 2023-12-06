// Import classes
const Shape = require('./lib/shape.js');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');

const inquirer = require('inquirer'); // get inquirer accesse
const maxLengthInputPrompt = require('inquirer-maxlength-input-prompt'); // used so I can have a max length of characters inputed
inquirer.registerPrompt('maxlengthInput', maxLengthInputPrompt); // used so I can have a max length of characters inputed 

const fs = require('fs'); // file system module for reading/writing to files

function generateSvg(shape){ // generates the code for the svg file
   return `<svg height="300" width="400" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    ${shape.renderText()}
</svg>` 
}

function createLogo(shape){ // writes to file
    fs.writeFile('./examples/logo.svg', generateSvg(shape), 
    (err) => err ? console.error(err) : console.log('Generated "logo.svg" sucessfully! Look in "examples" directory. Thanks.'));
}

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
            name: 'colorText',
            message: 'Enter the color of the text you would like (Hexadecimal with # or Color Keyword):',
        },
        {
            type: 'list', 
            name: 'shape',
            message: 'What shape would you like? (Please select one)',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            name: 'colorShape',
            message: 'Enter the color of the shape you would like (Hexadecimal with # or Color Keyword):',
        },
    ]);
}

// Initialize the app
function init() {
    getLogoInfo() // Inquirer prompt
        .then((answers) => { // answers is the response given after running the prompt
            // Create Shape Object and Write to File 
            switch(answers.shape){
                case 'Circle':
                    let circle = new Circle(answers.text, answers.colorText, answers.colorShape);
                    createLogo(circle); 
                    break;
                case 'Square':
                    let square = new Square(answers.text, answers.colorText, answers.colorShape);
                    createLogo(square); 
                    break;
                case 'Triangle':
                    let triangle = new Triangle(answers.text, answers.colorText, answers.colorShape);
                    createLogo(triangle); 
                    break;
                default:
                    console.log("Something went wrong...");
            }
        });
}

// Function call to initialize app
init();
