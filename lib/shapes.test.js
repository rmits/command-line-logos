const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    it('should render a circle', () => {
        const circle = new Circle();
        circle.setShapeColor('blue');
        circle.setTextColor('red');
        circle.setText('test');
        expect(circle.render()).toEqual(`
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
            <circle cx='50%' cy='50%' r='100' height='100%' width='100%' fill='blue' fill-opacity='1' />
            <text x='50%' y='50%' fill='red' text-anchor='middle' font-size='60' dominant-baseline='middle'>test</text>
        </svg>`
        );
    });
});

describe('Triangle', () => {
    it('should render a triangle', () => {
        const triangle = new Triangle();
        triangle.setShapeColor('blue');
        triangle.setTextColor('red');
        triangle.setText('test');
        expect(triangle.render()).toEqual(`
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
            <polygon points='100,0 0,200 200,200' fill='blue' fill-opacity='1' />
            <text x='50%' y='50%' fill='red' text-anchor='middle' font-size='40' dominant-baseline='middle'>test</text>
        </svg>`
        );
    });
});

describe('Square', () => {
    it('should render a square', () => {
        const square = new Square();
        square.setShapeColor('blue');
        square.setTextColor('red');
        square.setText('test');
        expect(square.render()).toEqual(`
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
            <rect width='100%' height='100%' fill='blue' fill-opacity='1' />
            <text x='50%' y='50%' fill='red' text-anchor='middle' font-size='60' dominant-baseline='middle'>test</text>
        </svg>`
);
    });
});