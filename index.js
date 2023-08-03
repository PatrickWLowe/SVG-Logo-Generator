const inquirer = require('inquirer');
const fs = require('fs');

function userprompt {
    inquirer.prompt([

        {
            type: 'list',
            message: 'What shape would like your logo to be?',
            choices: ['Square', 'Circle', 'Triangle'],
            name: 'shape'
        },
        {
            type: 'input',
            message: 'What color would you like your logo to be? (Please enter a color name or a hex color code)',
            name: 'shapecolor'
        },
        {
            type: 'input',
            message: 'What text would you like your logo to say? (3 letters maximum)',
            name: 'text'
        },
        {
            type: 'input',
            message: 'What color would you like your text to be?(Please enter a color name or a hex color code)',
            name: 'textcolor'
        },


    ])

}