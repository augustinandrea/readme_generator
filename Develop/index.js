// TODO: Include packages needed for this application
const fs = require('fs');
// Install the `inquirer` dependency
const inquirer = require("inquirer");

//
const generate_markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

    {   name: "Title",
        message: "What is the name of your project?",
        type: "input"
    },

    {   name: "Description",
        message: "Write a detailed explanation of what your project is and does:",
        type: "input"
    },

    {   name: "Installation",
        message: "How do you install your project?",
        type: "input"
    },

    {   name: "Usage",
        message: "How does your project work?",
        type: "input"
    },

    {   name: "License",
        message: "Please input the license for the project:",
        type: "list",
        choices: [
            "Apache 2.0",
            "Eclipse",
            "GNU GPL v3",
            "GNU GPL v2",
            "GNU AGPL v3",
            "GNU LGPL v3",
            "GNU FDL v1.3",
            "ISC",
            "MIT",
            "Mozilla",
            "Unlicense"
        ]
    },

    {   name: "Contributing",
        meesage: "Who can contribute and how?",
        type: "input"
    },

    {   name: "Tests",
        message: "What are some tests for your project?",
        type: "input"
    },

    {   name: "Questions",
        message: "Any questions needed for the project?",
        type: "input"
    },

    {   name: "Github_username",
        message: "Write your Github username:",
        type: "input"
    },

    {   name: "Email",
        message: "Write your email:",
        type: "input"
    }

];

// TODO: Create a function to write README file
function writeToFile(data) {

    var fileName = data.Title
        .toUpperCase()
        .split(' ')
        .join('') + '.md';

    console.log("file name: " + fileName);

    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), function (err) {
        if (err) {
            return console.log(err);
        }
    });

}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
        .then( results => writeToFile(results) );

}

// Function call to initialize app
init();
