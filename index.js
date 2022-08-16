const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./generateMarkdown.js')

inquirer
    .prompt([
        {
        type: 'list'
        
        },
       {
        type: 'input',
        message: 'What is your Github Profile?',
        name: 'github'
       },
       { type: 'input',
       message: 'What is your Project title?',
       name: 'project'
       },
       {
        type: 'input',
        message: 'Please enter a Description of your project.',
        name: 'project'
       },
       {
        type: 'input',
        message: 'Please describe your Installation Instructions.',
        name: 'installation'
        },
        {
        type: 'input',
        message: 'Please describe the Usage of your program/application.',
        name: 'usage'
        },
        {
        type: 'input',
        message: 'Please list any other Contributors to this program/application.',
        name: 'contributors'
        },
        {
        type: 'input',
        message: 'Please list any Testing required for this program/application.',
        name: 'testing'
        }
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(README.md, markdown)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
