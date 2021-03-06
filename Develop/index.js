// TODO: Include packages needed for this application
const fs = require('fs');
// Install the `inquirer` dependency
const inquirer = require("inquirer");
// add markdown stuff
const generate_markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

    {   name: "Title",
        message: "What is the name of your project?",
        type: "input",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },

    {   name: "Description",
        message: "Write a detailed explanation of what your project is and does:",
        type: "input",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid explanation is needed.");
            }
            return true;
        }
    },

    {   name: "Installation",
        message: "How do you install your project?",
        type: "input"
    },

    {   name: "Usage",
        message: "How do you put the project to use?",
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
        message: "What if anyone has questions about the project?",
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

    /*var fileName = data.Title
        .toUpperCase()
        .split(' ')
        .join('') + '.md';*/

    var ReadMe = generate_markdown(data);
    console.log("Generating README......");

    fs.writeFile("README.md", ReadMe, function (err) {
        if (err) {
            return console.log(err);
        }
    });

    console.log("README.md generated!")

}

// TODO: Create a function to initialize app
function init() {

    console.log("Start the process....");

    inquirer.prompt(questions)
        .then( results => writeToFile(results) );
}

// Function call to initialize app
init();
