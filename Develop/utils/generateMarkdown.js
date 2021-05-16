// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {

    case "Apache 2.0":
      licenseBadge = `[![License](https: //img.shields.io/badge/License-Apache%202.0-blue.svg)](https: //opensource.org/licenses/Apache-2.0)`;
      break;

    case "Eclipse":
      licenseBadge = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      break;

    case "GNU GPL v3":
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;

    case "GNU GPL v2":
      licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
    
    case "GNU AGPL v3":
      licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;

    case "GNU LGPL v3":
      licenseBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
      break;

    case "GNU FDL v1.3":
      licenseBadge = `[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)`;
      break;

    case "ISC":
      licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      break;

    case "MIT":
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;

    case "Mozilla":
      licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;

    case "Unlicense":
      licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      break;

    default:
      licenseBadge = ``;
      break;

  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}
  ##Description:

  # Table of Contents
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[licenses](#licenses)
  -[contribution](#contribution)
  -[test](#test)
  -[questions](#questions)

  ${data.installation}
  ##Installation:

  ${data.usage}
  ##Usage:

  ${data.licenses}
  ##Licenses: 
  ${renderLicenseBadge(data.licenses)}

  ${data.contribution}
  ##Contribution:

  ${data.test}
  ##Test:

  ${data.questions}
  ##Questions:
  GitHub: [@${data.Github_username}]
  Email: ${data.email}


`;
}

module.exports = generateMarkdown;
