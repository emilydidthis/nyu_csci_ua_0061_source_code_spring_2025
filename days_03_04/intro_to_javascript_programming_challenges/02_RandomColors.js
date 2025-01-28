// Programming Challenge: 
// Generate three random integers between 0 and 256 (with 256 not inclusive) for your red, green, and blue values
let red = parseInt(Math.random() * 256);
let green = parseInt(Math.random() * 256);
let blue = parseInt(Math.random() * 256);

console.log(red, green, blue);
// Output these colors to the browser
document.write("<p>Red: " + red + "</p>");
document.write("<p>Green: " + green + "</p>");
document.write("<p>Blue: " + blue + "</p>");

// Create a string that packages up these colors as a CSS RGB color descriptor
// rgb(24,25,26)
let rgb = "rgb(" + red + "," + green + "," + blue +")";

// Output a div (give it the class colorBox) on the page that will use this color
document.write(`<div class="colorBox" style="background-color:${rgb};"></div>`)