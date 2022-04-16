// const mitLicense = [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)]]
// const gplLicense =[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)
// const noneLicese = {}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(res) {
  return `# ${res.title}
  ## Table of Contents
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[collaborators](#collaborators)
  -[license](#license)
  -[badges](#badges)
  -[features](#features)
  -[contribute](#contribute)
  -[tests](#tests)
  -[questions](#questions)

## Description
${res.description}

## Installation
${res.installation}

## Usage
${res.usage}

## Collaborators
${res.collaborators}

## License
${res.license}

## Badges
${res.badges}

## Features
${res.features}

## Contribute
${res.contribute}

## Tests
${res.tests}

## Questions
Please reach out with any questions!
Github: ${github}
Email: ${email}
`;
}

module.exports = generateMarkdown;
