// Import file
const Circle = require('../lib/circle.js');

describe('Circle', () => {

    // Test to verify Circle class can be instantiated
    describe('Instantiate', () => {
        test('Should be an instance of the Circle Class', () => {
            const circle = new Circle();

            expect(circle).toBeInstanceOf(Circle);
        });
    });

    // Test to verify that properties can be assigned to Class
    describe('Initialize properties', () => {
        test('Should set properties of Circle Class', () => {
            const text = "my text";
            const textColor = "green";
            const color = "blue";
            const circle = new Circle(text, textColor, color);
            
            expect(circle.text).toBe(text);
            expect(circle.textColor).toBe(textColor);
            expect(circle.color).toBe(color);
        });
    });

    // Test to verify render() returns a string of said text with properties
    describe('render() method', () => {
        test('Should return string with properties set', () => {
            const text = "my text";
            const textColor = "green";
            const color = "blue";
            const circle = new Circle(text, textColor, color);
            
            expect(circle.render()).toBe(
                `<circle cx="150" cy="100" r="80" fill="${circle.color}" />`
            );
        });
    });
});