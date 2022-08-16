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
function generateMarkdown(answers) {
  return `# ${answers.title}
  ## Table of Contents
  [Author](#author) <br>
  [Contact](#contact-me) <br>
  [Deployed Page](#deployed-page) <br>
  [GitHub Repo](#github-repo) <br>
  [Project Description](#project-description)<br>
  [Video Walkthrough](#video-walkthrough)<br>
  [Installation](#installation)<br>
  [Usage](#usage)<br>
  [Test Instructions](#testing)<br>
  [Contribution Guidelines](#contribution)<br>
  [Preview Image](#preview-image)<br>
  [Questions](#questions)<br>
  ## Author
  ${answers.author}
  ### Contact me
  **Github:** [${answers.github}](https://github.io/${answers.github})
  **Email:** ${answers.email}
  **Website:** ${answers.website}
  ## Deployed Page
  ${answers.live}
  ## GitHub Repo
  [${answers.title}](https://github.io/${answers.github}/${answers.repo})
  ## Project Description
  ${answers.description}
  ## Video Walkthrough
  [Video Walkthrough](${answers.video})
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## Testing
  ${answers.test}
  ## Contribution
  ${answers.contributors}
  ## Preview Image
  ![image](${answers.image})
  ## Questions
  ${answers.issues}`;
}

module.exports = generateMarkdown;
