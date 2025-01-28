// Programming Challenge:

// Ask the user for their age
let age = parseInt(prompt("How old are you?" ));

// Check if the result not a number (NaN) or less than 0
if (isNaN(age) == true || age <= 0){
    document.write("<p>Not a valid number!</p>")
}

else { // good to go!

    for (let i = 0; i < age; i++){
        let chance = parseInt(Math.random() * 3) + 1; // 0, 1, 2
        document.write(`<img src = 'images/candle${chance}.png'>`);
        
        // if (chance == 0) {
        //     document.write("<img src = 'images/candle1.png'>");
        // }
        // else if (chance == 1) {
        //     document.write("<img src = 'images/candle2.png'>");
        // }
        // else {
        //     document.write("<img src = 'images/candle3.png'>");
        // }
    }

}

// If so, write a paragraph to the page that says "Not a valid number!"
// Otherwise, display that many candle images on a web page.
// There are 3 different candle images in the images folder – pick them at random!
