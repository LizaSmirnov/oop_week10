const {Triangle, Square, Circle} = require('../shapes.js')

//use jest to test out rednering for shapes and colors
//needs to turn scripts test to "jest"
describe('Triangle', () =>{
    test('triangle shape with red color backround', () =>{
        const shape = new Triangle();
        shape.setColor('red');
        expect(shape.render()).toEqual(`<polygon points="50 15, 100 100, 0 100" fill ="red" />`)

    })
})
console.log(shape)