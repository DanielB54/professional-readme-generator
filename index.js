const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js')



function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your First and Last name?',
            name: 'author'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Please provide a link to your Deployed Page.',
            name: 'live'
        },
        {
            type: 'input',
            message: 'Please provide a link to your Project Repository.',
            name: 'repo'
        },
        {
            type: 'input',
            message: 'Please provide a link to a Video Walkthrough of your program/application.',
            name: 'video'
        },
        {
        type: 'list',
        message: 'How is your project Licensed?',
        choices: ['Apache License 2.0', 'MIT license', 'Mozilla Public License 2.0', 'No License'],
        name: 'license'
        },
       {
        type: 'input',
        message: 'What is your Github Profile?',
        name: 'github'
       },
       { type: 'input',
       message: 'What is your Project Title?',
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
        },
        {
            type: 'input',
            message: 'Please provide a link to your personal developer website.',
            name: 'website'
        },
        {
            type: 'input',
            message: 'please list any FAQ and answers here.',
            name: 'questions'
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
}

// Function call to initialize app
init();
