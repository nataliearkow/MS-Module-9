class MarkDown {

    static renderLicenseBadge(license) {
        const badges = {
            ISC: [],
        }
        return badges[license]
    }

    static renderLicenseLink(license){
        const licenseLinks = {
            isc: [],
        }
        return licenseLinks[license]
        }

    static renderLicenseSection(license) {
        if(license) {
            return `License under the ${this.renderLicenseLink(license)}`
        } else {
            return ``
        }
    }


    static generateReadme(answers) {
        return `
## ${answers.title}


${this.renderLicenseBadge(answers.license)}

## Table of Content
- [Project Description](#Description)
- [Usage](#Usage)
- [Contribution](#Contributing)
- [Installation](#Installation)
- [Tests](#Instructions)
- [Questions](#Questions)
- [License](#License)

## Description
${answers.description}

## Usage
${answers.usage}

## Installation
${answers.installation}
        
## Contributing
${answers.contributing}
