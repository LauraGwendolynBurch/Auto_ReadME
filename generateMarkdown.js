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
[Github Repo ${data.title}](${data.githubProjectRepo})


## Installation
* ${data.instal}


## User-Story
${data.story}


## License
[ ${data.license} ](${data.licenseWebsite})



## Contribution
${data.contribution}


## Test
![Sample Video of Project ](${data.video})


## Images
![Sample Image of Project ](${data.image})


## Credits
${data.credits}


## Questions
GitHub Username: [${data.gitHubUserName}](${data.gitHubWebsite})


Email: <${data.email}>

  
  `
  }
  
  module.exports = generateMarkdown;
  