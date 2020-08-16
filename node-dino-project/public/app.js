const dinoFormButton = document.querySelector('#btn'); // Btn element
const columnOne = document.querySelector('#C1')
const species = document.querySelector('#species')
// Ref: https://gist.github.com/msmfsd/fca50ab095b795eb39739e8c4357a808
let dinoData;
  
fetchAsync();

// Load the information from the dino file
async function fetchAsync() {
  // Await the fetch execution
  const data = await(fetch('data/dino.json'));
  // Await the data being available
  dinoData = await data.json();
}

// Get the information from the form

    // Create Dino Constructor
const dinoTemplate = {
  diet: "xxx",
  fact: "xxx",
  height: 0,
  species: "x",
  weight: 0,
  when: "x",
  where: "x"
}


    // Create Dino Objects
// For each dinoData - create a Dinosaur object

    // Create Human Object
// Create a Human object
// Create a Pideon object


    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

        // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array

    // Use a Map to generate the Tile content

        // Add tiles to DOM - render with IDs

// Pass the object and complete the onscreen fields
function showGridItem(){
//  columnOne.textContent = "Anklyosaurus";
  let dino = dinoData.Dinos[0].species;
  columnOne.textContent = dino;
  species.textContent = "Hello Changing Text";
}

function getDinoData(Dinos, species){

 const dinoFilter = Dinos.filter(function(dino){
   if (dino.species === species){
     return dino;
   }
 });

 return dinoFilter;
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
  // Hide the Dino entry form
  hideDinoForm();

  //species.textContent = "Hello Changing Text";
  showGridItem();
  // Process the infographic
})
