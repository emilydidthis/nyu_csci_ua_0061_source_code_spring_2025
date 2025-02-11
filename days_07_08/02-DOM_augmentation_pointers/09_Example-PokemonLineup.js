// first, get a ref to all ".tile" elements
const allTiles = document.querySelectorAll('.tile');

// also get refs to each of the three 'slot' boxes
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');

// and get a ref to the 'available' box
const available = document.getElementById('available');

// visit all tile elements
for (let i = 0; i < allTiles.length; i++) {
    // give each tile element a function to run when they are clicked
    allTiles[i].onclick = function(event) {
       
        // TODO: 
        // move the element into one of the boxes, if they are unoccupied
        // If it's in the assigned boxes, move it back to the available box
    }
}
