
class Shape {
    constructor() {
        this.color = ""; //leave empty user input
    }
}

//Inheriting properties from parent

class Triangle extends Shape {
    render(){
    return `<polygon points="50 15, 100 100, 0 100" fill ="${this.color}" />`
}
}

class Square extends Shape {
    render(){
        return `<rect x="400" y="100" width="400" height="200"
        fill="${this.color}"/>`
}
}

class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

module.exports = {Triangle, Square, Circle};

/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="green" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
  
  </svg> */