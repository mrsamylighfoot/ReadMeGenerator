// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');
const util = require('util.promisify');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Project Title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description: Provide a short description of your project.',
        name: 'description',
    },
    {
       type: 'input',
        message: 'Installation: What do people need to know about installation?', 
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage: Provice instructions for usage alonge with any examples.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Collaborators: Who did you collaborate with? Did you follow any tutorials? Provide links here.',
        name: 'collaborators',
    },
    {
        type: 'list',
        message: 'License: Do you want to include a License?',
        name: 'license',
        choices: ['MIT', 'GPL', 'none'],
    },
    {
        type: 'list',
        message: '"Do you want to include badges?',
        name: 'badges',
        choices: ['yes', 'no'],
    },
    {
        type: 'input'
        message: 'Features: If your project has a lot of features, list them here.',
        name: 'features',
    },
    {
        type: 'input',
        message: 'How to Contribute: How would you like other developers to contribute?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Tests: Go the Extra Mile - write tests for your application and include here.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    }, 
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
]

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((res) => {
        console.log(res);
        fs.writeFile('README.md', generateMarkdown(res)),
        console.log('Generating ReadMe');
    })
}

// Function call to initialize app
init();
