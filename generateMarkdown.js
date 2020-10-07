function generateMarkdown(data) {
    console.log(data)
    return `# ${data.title}

    ## Application Description
    ${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Resource(s)](#resource)
    * [License](#license)

    ## Installation
    The following items/steps are required to install this application:
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Resource(s)
    ${data.resource}

    ## License
    ${data.license ==="MIT"?"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)":data.license==="IBM"?"[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)":"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"}

    ## Badge
    ${data.badge==="Last Commit"?"[![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg?style=flat)]()":data.badge==="Issues"?"[![GitHub Issues](https://img.shields.io/github/issues/badges/shields.svg?style=flat)"}

    ## Contributors
    ${data.contributors}

    ## Testing
    ${data.test}

    ## Contact Info
    *For any additional questions or support please reach out:
    ${data.username}
    ${data.email}

    `;

}
//way to expose code from file. allowing other pages to use code
module.exports = generateMarkdown;