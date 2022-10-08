class MarkDown {

    static renderLicenseBadge(license) {
        const badges = {
            ISC: [],
        }
        return badges[license]
    }

    static renderLicenseBadgeLink(license){
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
- [Project description](#Description)
- [Usage](#Usage)
- [Contribution](#Contributing)
- [Installation](#Installation)
- [Questions](#Questions)
- [License](#License)

## Description
${answers.description}

## Usage
${answers.installation}

## Installation
${answers.installation}
        
## Contributing
${answers.contributing}

## Tests
${answers.instructions}

## Questions
${answers.email}
${answers.github}

## License
${this.renderLicenseLink(answers.license)}
        `   
    }
}
module.exports = MarkDown