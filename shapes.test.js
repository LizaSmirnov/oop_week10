const { Triangle, Square, Circle } = require("./shapes.js");

//use jest to test out rednering for shapes and colors
//needs to turn scripts test to "jest"
describe("Triangle test", () => {
  test("triangle shape with red color backround", () => {
    const shape = new Triangle();
    shape.setColor('red');
    expect(shape.render()).toEqual(
      `<polygon points="50 15, 100 100, 0 100" fill ="red" />`
    );
  });
});

describe("Square test", () => {
  test("square shape with green backround", () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      `<rect x="400" y="400" width="400" height="400" fill="green"/>`
    );
  });
});

describe("Circle test", () => {
  test("shape will be circle with yellow backround", () => {
    const shape = new Circle();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="100" r="80" fill="yellow" />`
    );
  });
});
