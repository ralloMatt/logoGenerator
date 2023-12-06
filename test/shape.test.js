// Import file
const Shape = require('../lib/shape.js');

describe('Shape', () => {

    // Test to verify Shape class can be instantiated
    describe('Instantiate', () => {
        test('Should be an instance of the Shape Class', () => {
            const shape = new Shape();

            expect(shape).toBeInstanceOf(Shape);
        });
    });

    // Test to verify that text and textColor can be assigned to Class
    describe('Initialize properties', () => {
        test('Should set properties of Shape Class', () => {
            const text = "my text";
            const textColor = "blue";
            const shape = new Shape(text, textColor);
            
            expect(shape.text).toBe(text);
            expect(shape.textColor).toBe(textColor);
        });
    });

    // Test to verify renderText returns a string of said text with properties
    describe('renderText() method', () => {
        test('Should return string with properties set', () => {
            const text = "my text";
            const textColor = "blue";
            const shape = new Shape(text, textColor);
            
            expect(shape.renderText()).toBe(
                `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${shape.textColor}"> ${shape.text} </text>`
            );
        });
    });
});