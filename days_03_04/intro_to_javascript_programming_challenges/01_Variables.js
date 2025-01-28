// Programming Challenge:

// Ask the user for their name
let name = prompt("What is your name? ");
// console.log(name);

// Next, ask the user for a hex color code #AAAAAA
let hexColor = prompt("What is your favorite hex color code (i.e. FFCC00)? ");

// Then have the website welcome the user using an <h1> tag
document.write("<h1>Welcome, " + name + "</h1>");

// Use this code to create a div (give it a class of colorBox) on the screen with the correct color
document.write(`<div class="colorBox" style="background-color: #${hexColor};"></div>`);
