// Packages needed for this application //
const inquirer = require('inquirer')
const fs = require('fs');
const MarkDown = require('./lib/readmegen')

// Array of questions for user input //
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Information',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution Guidelines',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Test Instructions',
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions(email)',
    },
    {
        type: 'input',
        name: 'github',
        message: 'For questions(github)',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License',
        choices: ['ISC'],
        filter(val) {
            return val.toLowerCase();
        }
    },
]

// Run Function //

function runQuery() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const mark = MarkDown.generateReadme(answers)
        fs.writeFile('README.md', mark, function(err) {
            if (err) {
                console.log('Could not save file', err)
            } else {
                console.log('Success: new README.md file generated inside the current folder')
            }
        })
    })
    .catch((error)=>{
        console.log(error)
    })

}
    runQuery()
