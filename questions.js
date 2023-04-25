
const questions = [
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
        choices: ["Triangle", "Square", "Circle"],
        },
        {
        type: "list",
        message: "Please choose either a color keyword or hexiadecimal number for your text",
        name: "textColorChoice",
        choices: ["color keyword", "hexidecimal number"],
        },
        {
        type: "input",
        message: "Please enter hexidecimal number",
        name: "textColor",
        when: (answers) => {
            if(answers.textColorChoice === 'hexidecimal number'){
                return true;
            }
        }
        },
        {
        type: "input",
        message: "Please enter color keyword",
        name: "textColor",
        when: (answers) => {
          if(answers.textColorChoice === 'color keyword'){
          return true;
        }
        }
      },
        {
        type: "list",
        message: "Please choose using a color keyword or hexiadecimal number for your shape's color",
        name: "shapeColorChoice",
        choices: ["color keyword", "hexidecimal number"],
        },
        {
        type: "input",
        message: "Please enter hexidecimal number",
        name: "shapeColor",
          when: (answers) => {
            if(answers.textColorChoice === 'hexidecimal number'){
            return true;
          }
        }
        },
        {
        type: "input",
        message: "Please enter color keyword",
        name: "shapeColor",
        when: (answers) => {
          if(answers.textColorChoice === 'color keyword'){
          return true;
        }
    }
}
]

module.exports = questions;