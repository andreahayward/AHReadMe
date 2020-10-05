const inquirer = require('inquirer');
const axios = require("axios");
const generateMarkdown = require("./generateMarkdown.js");
const fs = require("fs");
const questions = [
    {
        type: "input",
        message: "Enter the Title for your application/project.",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "What is needed to install this application?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is this used for?",
        name: "usage",
    },
    {
        type: "input",
        message: "credits",
        name: "credits",
    },
    {
        type: "list",
        message: "Select which license the user should use.",
        choices: ["MIT", "IBM", "Apache"],
        name: "license",
    },
]