
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// array of questions for user
const questions = [{
    type:'input',
    message: "What is your project title?",
    name: "title",
},
// {
//     type:'input',
//     message: "Where is a description of this project?",
//     name: "description",
// },
// {
//     type:'input',
//     message: "What is your name?",
//     name: "personName",
// },
// {
//     type:'input',
//     message: "?",
//     name: "",
// },
// {
//     type:'list',
//     message: "",
//     name: "",
// },
// {
//     type:'input',
//     message: "What is your github URL for this project?",
//     name: "github",
// },
];

function writeToFile(fileName, data){
    const content = generateMarkdown( data );
    fs.writeFile(fileName, content, (err) => { 
        if (err)console.log("failed to write");
        else console.log("wrote file")
    })
};


function init() {

inquirer
    .prompt(questions)
    .then ( response => {
        // console.log(response);
        // console.log(response.personName);
        // console.log(response.location);
        // console.log(response.linkedIn);
        // console.log(response.github);
        
        writeToFile("Gen-README.md", response);
    });   
       
}

init();
