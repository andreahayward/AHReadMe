function generateMarkdown(data) {
    console.log(data)
    return `# ${data.title}

    ## Application Description
    ${data.description}

    ## Table of Contents
    //fill this in//

    ## Installation
    The following items/steps are required to install this application:
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    //add here

    ## Contributors
    ${data.contributors}

    ## Testing
    ${data.test}

    ## Contact Info
    *For any additional questions or support please reach out:
    ${data.githubProfile}
    ${data.email}

    `;

}
//way to expose code from file. allowing other pages to use code
module.exports = generateMarkdown;