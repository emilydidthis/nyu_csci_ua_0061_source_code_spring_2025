// grab references to each of our tabs
const tabWelcome = document.getElementById('tabWelcome');
const tabTraditional = document.getElementById('tabTraditional');
const tabGlazed = document.getElementById('tabGlazed');

// grab references to each content panel
const contentWelcome = document.getElementById('contentWelcome');
const contentTraditional = document.getElementById('contentTraditional');
const contentGlazed = document.getElementById('contentGlazed');


//  1. event handler to make our Welcome Tab active
tabWelcome.onclick = function(){
  // first, make this tab our 'active' tab by applying the 'active' class to it
  tabWelcome.classList.add("active");
  // remove the 'active' class from the other tabs
  tabTraditional.classList.remove("active");
  tabGlazed.classList.remove("active");
  // show the content associated with this tab
  contentWelcome.classList.remove("hidden");
  // hide the other two contents
  contentTraditional.classList.add("hidden");
  contentGlazed.classList.add("hidden");
}

// create two helper functions
// 1. deactivate all tabs
function deactivateAllTabs(){
  const allTabs = document.querySelectorAll(".tab");
  for (let i = 0; i< allTabs.length; i++){
    allTabs[i].classList.remove("active");
  }
}
// 2. hide all content 
function hideAllContent(){
  const allContent = document.querySelectorAll(".content");
  for (let i = 0; i< allContent.length; i++){
    allContent[i].classList.add("hidden");
  }
}

tabTraditional.onclick = function(){
  deactivateAllTabs();
  tabTraditional.classList.add("active");
  hideAllContent();
  contentTraditional.classList.remove("hidden");
}

tabGlazed.onclick = function(){
  deactivateAllTabs();
  tabGlazed.classList.add("active");
  hideAllContent();
  contentGlazed.classList.remove("hidden");
}
