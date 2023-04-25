
const { Triangle, Square, Circle } = require("./shapes.js"); //module

function generateLogo(response) {

    if (response.shape === 'Circle') {
        let answerShape = new Circle (response.shapeColor, response.text, response.textColor)
        return answerShape.render()
    }

    if (response.shape === 'Square') {
        let answerShape = new Square (response.shapeColor, response.text, response.textColor)
        return answerShape.render()
    }

    if (response.shape === 'Triangle') {
        let answerShape = new Triangle (response.shapeColor, response.text, response.textColor)
        return answerShape.render()
    }
};

module.exports = generateLogo;
