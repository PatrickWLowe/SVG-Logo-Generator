const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Circle, Triangle } = require("./lib/Shapes.js");

function writetofile(filename, data) {
  let SVG =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  let shapechoice;
  if (data.shape === "Square") {
    shapechoice = new Square();
    SVG += `${shapechoice.render()}"${data.shapecolor}"/>`;
  } else if (data.shape === "Circle") {
    shapechoice = new Circle();
    SVG += `${shapechoice.render()}"${data.shapecolor}"/>`;
  } else if (data.shape === "Triangle") {
    shapechoice = new Triangle();
    SVG += `${shapechoice.render()}"${data.shapecolor}"/>`;
  }

  SVG += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textcolor}">${data.text}</text>`;
  SVG += `</svg>`;

  fs.writeFile(filename, SVG, (err) => {
    if (err) throw err;
    console.log("generated SVG logo!");
  });
}

function userprompt() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What shape would like your logo to be?",
        choices: ["Square", "Circle", "Triangle"],
        name: "shape",
      },
      {
        type: "input",
        message:
          "What color would you like your logo to be? (Please enter a color name or a hex color code)",
        name: "shapecolor",
      },
      {
        type: "input",
        message:
          "What text would you like your logo to say? (3 letters maximum)",
        name: "text",
      },
      {
        type: "input",
        message:
          "What color would you like your text to be?(Please enter a color name or a hex color code)",
        name: "textcolor",
      },
    ])
    .then((data) => {
      if (data.text.length > 3) {
        console.log("Please enter a text with 3 letters maximum");
        userprompt();
      } else {
        writetofile("logo.svg", data);
      }
    });
}

userprompt();
