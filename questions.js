
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
        choices: ["triangle", "square", "circle"],
        },
        {
        type: "input",
        message: "Please enter a color keyword or hexiadecimal number for your text",
        name: "textColorChoice",
        choices: ["color keyword", "hexidecimal number"],
        },
        {
        type: "input",
        message: "Please enter hexidecimal number",
        name: "textColor",
        when: (answers) => {
            if(answers.textColorChoice === 'hexidecimal'){
            return true;
          }
          return false;
        },
          validate: (answer) => {
          const hex = "^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$";
          if(!answers.match(hex)){
            return console.log('<a href="http://www.example.com"> Please enter valid hex number. If need guidence please click on the link</a>')
          }
          return true;
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
        return false;
      },
      validate: (answer) => {
        var isColor = new Option().style;
        if(!answers.match(isColor)){
          return console.log('Please enter valid color keyword...just google it.')
        }
        return true;
      }
      },
        {
        type: "input",
        message: "Please enter a color keyword or hexiadecimal number for your shape's color",
        name: "shapeColor",
        choices: ["color keyword", "hexidecimal number"],
        },
        {
        type: "input",
        message: "Please enter hexidecimal number",
        name: "textColor",
          when: (answers) => {
            if(answers.textColorChoice === 'hexidecimal'){
            return true;
          }
          return false;
        },
        validate: (answer) => {
          const hex = "^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$";
          if(!answers.match(hex)){
            return console.log('<a href="http://www.example.com"> Please enter valid hex number. If need guidence please click on the link</a>')
          }
          return true;
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
        return false;
      },
      validate: (answer) => {
        var isColor = new Option().style;
        if(!answers.match(isColor)){
          return console.log('Please enter valid color keyword...just google it.')
        }
        return true;
      }
      }
]
