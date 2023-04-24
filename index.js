const inquirer = require("inquirer"); //npm pacjage
const fs = require("fs"); // need to be able to go from different modules
const { Triangle, Square, Circle } = require("./shapes.js"); //module
const generateLogo = require("./generateLogo.js"); //module
const questions = require("./questions.js")
const fileName = require("./")

//function that we need to create the svg image
function createLogo(response) {
  const svg = generateLogo(response)
  fs.writeFile(fileName, logo, (err) =>
    err ? console.log(err) : console.log("Successfully created logo!")
  )};

//function needed to start questions
function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        createLogo(response);
        })
    .catch(err => {
            console.log(err)
        });
}

init();
