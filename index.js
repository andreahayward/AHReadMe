const inquirer = require('inquirer');
const axios = require("axios");
const generateMarkdown = require("./generateMarkdown.js");
const fs = require("fs");
const questions = [
    {
        type: "input",
        message: "Enter the Title for your application.",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a brief description of your application.",
        name: "description",
    },
    {
        type: "input",
        message: "What is needed to install this application?",
        name: "installation",
    },
    {
        type: "input",
        message: "What resource(s) did you use to create this application?",
        name: "resource",
    },
    {
        type: "list",
        message: "Select which license(s) the user should use.",
        choices: ["MIT", "IBM", "Apache"],
        name: "license",
    },
    {
        type: "list",
        message: "Select which badge(s) you'd like to use.",
        choices: ["Last Commit", "Issues", "Release Date"],
        name: "badge",
    },
    {
        type: "input",
        message: "What is needed to test this application?",
        name: "test"
    },
    {
        type: "input",
        message: "Project contributors:",
        name: "contributors",
    },
    {
        type: "input",
        message: "Provide your GitHub username.",
        name: "username",
    },
    {
        type: "input",
        message: "Provide your email address.",
        name: "email",
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error) {
        if (error){
            throw error
        }
        console.log("Worked!")
        })
    
}

function init() {
    inquirer.prompt(questions).then(function(data){
        generateMarkdown(data)
        console.log(generateMarkdown(data))
       axios.get("https://api.github.com/users/" + data.githubUsername).then(function(response){
             data.githubProfile=response.data.html_url
             const content=generateMarkdown(data)
            writeToFile("README.md", content)
     })
    console.log(data)
})
}

init();
