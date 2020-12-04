// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

inquirer
    .prompt([{
        type:'input',
        message: "What is your project title?",
        name: "title",
    },
    {
        type:'input',
        message: "Where is a description of this project?",
        name: "description",
    },
    {
        type:'input',
        message: "What is your name?",
        name: "personName",
    },
    {
        type:'input',
        message: "?",
        name: "",
    },
    {
        type:'input',
        message: "",
        name: "",
    },
    {
        type:'input',
        message: "What is your github URL for this project?",
        name: "github",
    },
    ])

    .then ( response => {
        console.log(response.personName);
        console.log(response.location);
        console.log(response.linkedIn);
        console.log(response.github);
        const readmeFile = `
             ${response.personName}
             ${response.location}
             ${response.linkedIn}
             ${response.github}
          `
        const content = generateMarkdown(response);
        fs.writeFile("README_GEN.md", readmeFile, (err) =>{ 
            if (err)console.log("failed to write");
            else console.log("wrote file")
        });
    });
