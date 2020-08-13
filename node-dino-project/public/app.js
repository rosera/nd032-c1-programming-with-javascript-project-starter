//const json = require('./dino.json'); // Load the Dino data
const dinoFormButton = document.querySelector('#btn'); // Btn element

    // Create Dino Constructor
//console.log(json["Dinos"][0].species);

    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

        // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM
function showGrid() {

}


// Remove form from screen
function hideDinoForm() {
  // Get the Form
  let x = document.getElementById('dino-compare');
  // Change the display style to node (i.e. hidden)
  x.style.display = "none";
}

// On button click, prepare and display infographic
dinoFormButton.addEventListener('click', (event) => {
  //alert('Hide the form');
  hideDinoForm();
})
