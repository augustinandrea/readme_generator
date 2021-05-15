// TODO: Include packages needed for this application
const fs = require('fs');
// Install the `inquirer` dependency
const inquirer = require("inquirer");

//
const generate_markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

    {   name: "Project Title",
        message: "What is the name of your project? ",
        type: "input"
    },

    {   name: "Description",
        message: "Write a detailed explanation of what your project is and does: ",
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
        message: "Please input the license for the project: ",
        type: "list",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },

    {   name: "Contributing",
        meesage: "Who can contribute and how?",
        type: "input"
    },

    {   name: "Tests",
        message: "What are some tests for your project? ",
        type: "input"
    },

    {   name: "Questions",
        message: "Any questions needed for the project? ",
        type: "input"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fileName = data.name
        .toUpperCase()
        .split(' ')
        .join('') + '.md';



    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), function (err) {
        if (err) {
            return console.log(err);
        }
    });

}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
        .then( writeToFile() )
        .catch ( error => {
            console.log(error);
        });

}

// Function call to initialize app
init();
