const { Triangle, Square, Circle } = require("./shapes.js");

//use jest to test out rednering for shapes and colors
//needs to turn scripts test to "jest"
describe("Triangle test", () => {
  test("Triangle shape with red color backround and yellow text svg.", () => {
    const shape = new Triangle('red', 'svg', 'yellow');
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100, 15 200, 200 0, 200" fill="red"/><text x="100" y="185" font-size="70" text-anchor="middle" fill="yellow">svg</text></svg>`
    );
  });
});

describe("Square test", () => {
  test("Square shape with green backround and orange text sss", () => {
    const shape = new Square('green', 'sss', 'orange');
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="green"/><text x="100" y="125" font-size="70" text-anchor="middle" fill="orange">sss</text></svg>`
    );
  });
});

describe("Circle test", () => {
  test("Shape will be circle with yellow backround and white text cat", () => {
    const shape = new Circle('yellow','cat', 'white');
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="yellow" /><text x="150" y="125" font-size="70" text-anchor="middle" fill="white">cat</text></svg>`
    );
  });
});
