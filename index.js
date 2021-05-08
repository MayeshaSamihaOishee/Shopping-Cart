const inquirer = require ('inquirer');
const fs = require ('fs');
const util = require ('util');

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {

    return inquirer.prompt([
  {
type: "input",
message: "What is the name of your project ?",
name: "title"
  },

  {
    type: "input",
    message: "Provide a description of your project ?",
    name: "description"
      },

  {
    type: "input",
    message: "What is the installation process ?",
    name: "description"
      },

      {
        type: "input",
        message: "What are the test instructions ?",
        name: "description"
          },

          {
            type: "input",
            message: "What are the assumptions that you made ?",
            name: "description"
              }
    ])
}

function generateMarkdown(response) {

return `
# ${response.title}

# Table of contents

[Name](#name)
[Description](#description)
[Installation](#installation)
[Test](#test)
[Assumption](#assumption)

##Name:
${response.name}

##Description: 
${response.description}

##Installation: 
${response.installation}

##Test:
${response.test}

##Assumption:
${response.assumption} `;

}  

async function init (){

  try {
    const response = await promptUser();
    const readMe = generateMarkdown(response);
    await writeFileAsync(README.md, readMe);
    console.log("Successfully done");

  }
  catch (err){
    console.log(err);
  }
}

init();