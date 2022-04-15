// TODO: Include packages needed for this application
const licenseBadger = require('license-badger');
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require
// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is your Project Title?',
        name: 'title'
    },
    {
        message: 'Description: Provide a short description of your project.',
        name: 'description'
    },
    {
        message: 'Installation: What do people need to know about installation?', 
        name: 'installation'
    },
    {
        message: 'Usage: Provice instructions for usage alonge with any examples.',
        name: 'usage'
    },
    {
        message: 'Collaborators: Who did you collaborate with? Did you follow any tutorials? Provide links here.',
        name: 'collaborators'
    },
    {
        message: 'License: Do you want to include an MIT License?',
        name: 'license'
    },
    {
        message: '"Do you want to include badges?',
        name: 'badges'
    },
    {
        message: 'Features: If your project has a lot of features, list them here.',
        name: 'features'
    },
    {
        message: 'How to Contribute: How would you like other developers to contribute?',
        name: 'contribute'
    },
    {
        message: 'Tests: Go the Extra Mile - write tests for your application and include here.',
        name: 'tests'
    },
    {
        message: 'What is your GitHub username?',
        name: 'github'
    }, 
    {
        message: 'What is your email address?',
        name: 'email'
    },

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
