
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// array of questions for user
const questions = [{
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
    message: "What is deployed link to your project? Add as https://",
    name: "githubProjectRepo",
},
{
    type:'input',
    message: "What moduals did you instal to make your project?",
    name: "instal",
},
{
    type:'input',
    message: "What is the user story?",
    name: "story",
},
{
    type:'list',
    message: "What the license you used for this repo?",
    choices:
    [ 
        "MIT",
        "MPL-2.0",
        "CDDL_1.0",
        "EPL-2.0",
        "lgpl-license",
        "BSD-3-Clause",
        "Apache-2.0",

    ],
    name: "license",
},
{
    type:'input',
    message: "What are the steps needed for someone else to contibute to your project?",
    name: "contribution",
},
{
    type:'input',
    message: "Add a video to you assets folder, copy the relative path, and add that here?",
    name: "video",
},
{
    type:'input',
    message: "Add a image file to you assets folder, copy the relative path, and add that here?",
    name: "image",
},
{
    type:'input',
    message: "What resources helped you with this project?  Did other developers help?",
    name: "credits",
},
{
    type:'input',
    message: "What your github username?",
    name: "gitHubUserName",
},
{
    type:'input',
    message: "What is your github URL for this project? Add as https://",
    name: "gitHubWebsite",
},
{
    type:'input',
    message: "What is your email address?",
    name: "email",
},
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
        // console.log(response.title);
        // console.log(response.description);
        // console.log(response.github);
        
        writeToFile("Gen-README.md", response);
    });   
       
}

init();
