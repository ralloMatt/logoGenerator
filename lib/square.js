// Import parent class file
const Shape = require('./shape.js');

class Square extends Shape {
    constructor(text, textColor, color){
        super(text, textColor);
        this.color = color;
    }
    render(){
        return `<rect x="150" y="150" width="100" height="100" fill="${this.color}" />`;
    }
}

module.exports = Square;