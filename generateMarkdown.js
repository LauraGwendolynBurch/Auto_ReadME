// function to generate markdown for README
function generateMarkdown(data) {
    return `
     
# ${data.title}

## Description
${data.description}

## Table of Contents

* [Title](#Title)

* [Description](##Description)

* [Link-to-project](##Link-to-project)

* [Installation](##Installation)

* [User-Story](##User-Story)

* [License](##License)

* [Contribution](##Contribution)  

* [Test](##Test)

* [Images](##Images)

* [Credits](##Credits)

* [Questions](##Questions)



## Link-to-project 
[Github Repo Auto_ReadMe](https://lauragwendolynburch.github.io/Auto_ReadME/)


## Installation
* NPM i inquirer
* node.js

## User-Story
If you work with code this will save time while maintaining a quality readME.  

## License
[Apache License, Version 2.0](https://opensource.org/licenses/Apache-2.0)


## Contribution
Clone repo | Push changes | Create Pull request

## Test
![Sample Video of Project ](./images/sample1.png)

## Images
![Sample Image of Project ](./images/sample1.png)

## Credits
Anna Conover (tutor)

LevelApp (tutor)

University of Washington Bootcamp TAs and Instructor

Study Group: Aaron Parnell, Keenan Reed, Sally Perez, Rattanak Leng

## Questions
GitHub Username: [LauraGwendolynBurch](https://github.com/LauraGwendolynBurch)

Email: <lauraburch.lb@gmail.com>

  
  `
  }
  
  module.exports = generateMarkdown;
  