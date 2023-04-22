const { Triangle, Square, Circle } = require("./shapes.js"); //module

function generateLogo(fileName, answers) {
  let svgString = "";
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svgString += "<g>";
  svgString += "<svg>";
  svgString += `${answers.shape}`;

  let shape;
  if (answers.shape === "triangle") {
    shape = new Triangle();
    svgString += `<polygon points="50 15, 100 100, 0 100" fill ="${answers.color}" />`;
  } else if (answers.shape === "square") {
    shape = new Square();
    svgString += `<rect x="400" y="400" width="400" height="400"
        fill="${answers.color}"/>`;
  } else {
    shape = new Circle();
    svgString = `<circle cx="150" cy="100" r="80" fill="${answers.color}" />`;
  }

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  svgString += "<g>";
  svgString += "<svg>";
}

function writeFile(fileName, svgString) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created logo!")
  );
}
module.exports = generateLogo;
