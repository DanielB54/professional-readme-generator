const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your first and last name?',
            name: 'author'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Please provide a link to your deployed page.',
            name: 'live'
        },
        {
            type: 'input',
            message: 'Please provide a link to your project repository.',
            name: 'repo'
        },
        {
            type: 'input',
            message: 'Please provide a link to a video walkthrough of your program/application.',
            name: 'video'
        },
        {
        type: 'list',
        message: 'How is your project Licenced?',
        choices: ['Apache Licence 2.0', 'BSD 3-Clause "New" or "Revised" license', 'BSD 2-Clause "Simplified" or "FreeBSD" license', 'GNU General Public License (GPL)', 'GNU Library or "Lesser" General Public License (LGPL)', 'MIT licence', 'Mozilla Public License 2.0', 'Common Development and Distribution License', 'Eclipse Public License version 2.0', 'No Licence'],
        name: 'licence'
        },
       {
        type: 'input',
        message: 'What is your Github Profile?',
        name: 'github'
       },
       { type: 'input',
       message: 'What is your Project title?',
       name: 'title'
       },
       {
        type: 'input',
        message: 'Please enter a Description of your project.',
        name: 'description'
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
        name: 'test'
        }
    ])
    .then(answers => {
        console.info('Answers:', answers)
        let mdContent = markdown(answers);
        fs.writeFile('newREADME.md', mdContent, (err) => {
            if (err) { return console.error(err)}
            else {console.log('Success!')};
        })
    })

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
