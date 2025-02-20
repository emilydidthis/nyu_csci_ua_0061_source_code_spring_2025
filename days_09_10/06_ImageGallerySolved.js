// set up listeners for each 'img' tag inside the 'container' div
let allImgTags = document.querySelectorAll('#container img');
for (let i = 0; i < allImgTags.length; i++) {

  // when the mouse clicks on the image
  allImgTags[i].onclick = function(event) {

    // 1. Get Caption
    // when an image is hovered over, grab its 'data-info' property
    // and write it to the 'results' div
    let info = event.currentTarget.dataset.info;
    document.getElementById('caption').innerHTML = info;

    // 2. Displaying Big Image
    // remove any children in the bigimage container, if necessary
    while (document.getElementById('bigimage').children.length > 0) {
      document.getElementById('bigimage').removeChild(document.getElementById('bigimage').children[0]);
    }
    // update the 'bigimage' div with a large version of this image
    let bigImg = document.createElement('img');
    bigImg.src = event.currentTarget.dataset.bigimage;
    document.getElementById('bigimage').appendChild(bigImg);

    // 3. Setting Counters
    // set up a new data-counter attribute on the element
    // is this the first time the image has been clicked? if so, 
    if (event.currentTarget.dataset.counter === undefined) {
      event.currentTarget.dataset.counter = 1;
    } else { // otherwise update the element
      event.currentTarget.dataset.counter = parseInt(event.currentTarget.dataset.counter) + 1; //must convert data to int
    }
    document.getElementById('counter').innerHTML = 'You have clicked on this image ' + event.currentTarget.dataset.counter + ' times!';

    
  }
}
