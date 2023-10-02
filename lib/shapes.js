class Shape {
    constructor() {
        this.textColor = '';
        this.shapeColor = '';
        this.text = '';
    }

    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

    setText(text) {
        this.text = text;
    }
}

class Circle extends Shape {
    render() {
        return ( `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
            <circle cx='50%' cy='50%' r='100' height='100%' width='100%' fill='${this.shapeColor}' fill-opacity='1' />
            <text x='50%' y='50%' fill='${this.textColor}' text-anchor='middle' font-size='60' dominant-baseline='middle'>${this.text}</text>
        </svg>`
        );
    };
}

class Triangle extends Shape {
    render() {
        return (`
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
            <polygon points='50%,0 0,100% 100%,100%' fill='${this.shapeColor}' fill-opacity='1' />
            <text x='50%' y='50%' fill='${this.textColor}' text-anchor='middle' font-size='60' dominant-baseline='middle'>${this.text}</text>
        </svg>`
        );
    }
}

class Square extends Shape {
    render() {
        return (`
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
            <rect width='100%' height='100%' fill='${this.shapeColor}' fill-opacity='1' />
            <text x='50%' y='50%' fill='${this.textColor}' text-anchor='middle' font-size='60' dominant-baseline='middle'>${this.text}</text>
        </svg>`
        );
    }
}

module.exports = { Circle, Triangle, Square };
