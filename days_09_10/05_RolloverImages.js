// get a reference to all images in the "container"
let allImages = document.querySelectorAll("#container img"); // descendant selector 
// all image elements within #container 

for (let i = 0; i < allImages.length; i++){
    // on hover
    allImages[i].onmouseover = function(event){
        // when you hover over an image, reveal its underlying pokemon
        event.currentTarget.src = event.currentTarget.dataset.rolloverimage;
    }

    // mouse leaving 
    allImages[i].onmouseout = function(event){
        // when you leave the image, it should return to the default pokeball image 
        event.currentTarget.src = event.currentTarget.dataset.normalimage;
    }
}




