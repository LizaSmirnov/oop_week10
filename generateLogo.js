
const { Triangle, Square, Circle } = require("./shapes.js"); //module

function generateLogo(response) {

    if (response.shape === 'Circle') {
        let userShape = new Circle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'Square') {
        let userShape = new Square (response.color, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'Triangle') {
        let userShape = new Triangle (response.color, response.text, response.textColor)
        return userShape.render()
    }
};

module.exports = generateLogo;
