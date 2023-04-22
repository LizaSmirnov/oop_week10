const inquirer = require("inquirer"); //npm pacjage
const fs = require("fs"); // need to be able to go from different modules
const { Triangle, Square, Circle } = require("./shapes.js"); //module
const generateLogo = require("./generateLogo.js"); //module

function newLogoParams() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please choose three letters to have your logo display",
        name: "text",
        name: "text",
        validate: (lettersInput) => {
          if (lettersInput.length === 3) {
            return true;
          } else {
            return console.log("Please enter only three variables");
          }
        },
      },
      {
        type: "list",
        message: "Please choose one of the following shapes",
        name: "shape",
        choices: ["triangle", "square", "circle"],
      },
      {
        type: "list",
        message: "Please choose a color for the letters",
        name: "textColor",
        choices: ["blue", "green", "white", "red", "orange", "yellow", "black"],
      },
      {
        type: "list",
        message: "Please choose a backround color",
        name: "color",
        choices: ["blue", "green", "white", "red", "orange", "yellow", "black"],
      },
    ])
    .then((response) => {
      console.log(response);
      fs.writeFile("logo.svg", generateLogo(response));
    });
}

newLogoParams();
