const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        message: 'TEXT: Insert up to (3) lines of text for your logo',
        name: 'name',
    },
    {
        type: 'input',
        message: 'COLOR: Insert a color for your text logo',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'SHAPE: Select a shape for your logo',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'SHAPE COLOR: Insert a color for your shape',
        name: 'shapeColor',
    },
];

function generateLogo(data) {
    const name = data.name;
    const textColor = data.textColor;
    const shape = data.shape;
    const shapeColor = data.shapeColor;

    let logo;

    switch (shape) {
        case 'Circle':
            const circle = new Circle();
            circle.setShapeColor(shapeColor);
            circle.setTextColor(textColor);
            circle.setText(name);
            logo = circle.render();
            break;
        case 'Triangle':
            const triangle = new Triangle();
            triangle.setShapeColor(shapeColor);
            triangle.setTextColor(textColor);
            triangle.setText(name);
            logo = triangle.render();
            break;
        case 'Square':
            const square = new Square();
            square.setShapeColor(shapeColor);
            square.setTextColor(textColor);
            square.setText(name);
            logo = square.render();
            break;
        default:
            console.log('Please select a valid shape');
    }
    return logo;
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Logo generated successfully!');
        }
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const logo = generateLogo(data);
            if (logo) {
                writeToFile('logo.svg', logo);
            }
        })
        .catch((error) => {
            console.error('Error occurred:', error);
        });
}

init();

