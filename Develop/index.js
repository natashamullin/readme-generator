// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const promptUser = () => {
    return inquirer.prompt([

        //user info
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter your GitHub username? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('please enter your GitHub link!')
                    return false
                }
            }
        }, {
            type: 'input',
            name: 'email',
            message: 'Enter your email please? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('please enter your email!')
                    return false
                }
            }
        },
        //name of project

        {
            type: "input",
            name: "title",
            message: "What is the name of your project (required)?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('please enter your name!');
                    return false;
                }
            }

        },

        //description of project
        {
            type: "input",
            name: "description",
            message: "please provide a short description of your project (required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('please enter your name!');
                    return false;
                }
            }

        },

        //how to use it 
        {
            type: "input",
            name: "How",
            message: "please provide a short description of how to use this project (required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('please enter your name!');
                    return false;
                }
            }

        },
        {
            type: "input",
            name: "install",
            message: "please provide the instructions on how to install",

        },
        // license
        {
            type: "list",
            name: "license",
            message: "What license did you use? ",
            choices: [
                "Apache",
                "mit",
                "isc",
                "Gnu GPLv3",
            ],
        },

        //credits
        {
            type: "confirm",
            name: "confirmCredits",
            message: "would you like to give credit to colaborators (with GitHub links), tutorials, or any third-party assets that require attribution? "

        },
        {
            type: "input",
            name: "credits",
            message: "please provide the credits you would like to give with links",
            when: ({ confirmCredits }) => {
                if (confirmCredits) {
                    return true;
                } else {
                    return false;
                }
            }
        },

        //languages used
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        //license
        {
            type: "input",
            name: "license",
            message: 'please provide any license that need to be included'
        },
        //link to project

        {
            type: 'input',
            name: 'github',
            message: 'Enter the link to the project on GitHub ? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('please enter user name!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'deployed',
            message: 'Enter the link to the deployed project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('please enter user name!')
                    return false
                }
            }
        },

        //screen shots?



    ])
};

// function to write README file
function writeToFile(fileName, data) {
    const markDown = generateMarkdown(data)
    fs.writeFileSync(fileName, markDown)
}

// function to initialize program
function init() {

    promptUser().then(answers => writeToFile("readme.md", answers))
}

// function call to initialize program
init();
