// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

#Table of Contents

-[Description](#description)
-[Usage](#useage)
-[Installation](#installation)
-[Languages](#languages)
-[Colaborators](#colaborators)
-[License](#license)
-[Links](#links)
-[Questions](#questions)

 ## Description:
 ![License](https://img.shields.io/bagde/License-${data.license}-blue.svg "License Badge")
 
 ${data.description}
 
 ## Usage:
 ${data.How}

 ## Installation
 ${data.install}

 ## Languages:
 ${data.languages.join(',')}

 ## Colaborators:
 ${data.name};[link](https://github.com/${data.link}) 
 [link](${data.credits})



 ##License
 For more info about the License, click on the link below.

 -[License](https://opensource.org/license/${data.license})


 ## Links
 Link to the GitHub repo
[link](${data.github})
Link to the deployed project
[link](${data.deployed})

## Questions 
please reach me at my GubHub account or through Email if you have any questions
${data.name}; [link](github.com/${data.link})
[link](${data.email})

`;
}

module.exports = generateMarkdown;
