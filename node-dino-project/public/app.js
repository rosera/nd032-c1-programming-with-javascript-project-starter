const dinoFormButton = document.querySelector('#btn'); // Btn element
//const columnOne = document.querySelector('#C1')
//const species = document.querySelector('#species')
const factor = 12;
let dinoData;
  
// Ref: https://gist.github.com/msmfsd/fca50ab095b795eb39739e8c4357a808
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
function DinoInfo(dino) {
 this.species = dino.species;
 this.weight  = dino.weight;
 this.height  = dino.height;
 this.diet    = dino.diet;
 this.fact    = dino.fact; 
 this.when    = dino.when; 
 this.where   = dino.where; 
}

// Get the Form data
const formData = function getFormData(sapien) {
  // Get the form properties
  const name = document.querySelector('#name').value;
  sapien.species = name;
  
  // Height - Feet
  let heightFeet = document.querySelector('#feet').value;

  // Height - Inches
  let heightInches = document.querySelector('#inches').value;

  const infoHeight = document.querySelector('#info-height');
  let height = parseInt(heightFeet * factor) + parseInt(heightInches);
  sapien.height = height;

  // Weight
  let weight = document.querySelector('#weight').value;
  sapien.weight = weight;

  // Diet
  let diet = document.querySelector('#diet').value;
  sapien.diet = diet;
}

// Remove form from screen
function hideDinoForm() {
  // Get the Form
  let x = document.getElementById('dino-compare');
  // Change the display style to node (i.e. hidden)
  x.style.display = "none";
}



// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 
function compareWeight(dino, myForm) {
// Comparisions - weight, height, diet
 if (dino.weight > myForm.weight){
   let weightDiff = dino.weight - myForm.weight;
   dino.fact = `Heres an interesting fact ${dino.species} is ${weightDiff} heavier than you`;
  }
  return dino;
};


// Create Dino Compare Method 2
function compareHeight(dino, myForm ) {
// Comparisions - weight, height, diet
 if (dino.height > myForm.height){
   let heightDiff = dino.height - myForm.height;
   dino.fact = `Heres an interesting fact ${dino.species} is ${heightDiff} taller than you`;
  }
  return dino;
};

    
// Create Dino Compare Method 3
function compareDiet(dino, myForm){
 if (dino.diet === myForm.diet){
   dino.fact = `Heres an interesting fact ${dino.species} has the same diet as you`;
  }
  return dino;
};


    // Generate Tiles for each Dino in Array

    // Use a Map to generate the Tile content

        // Add tiles to DOM - render with IDs


function setInfoData(dino, gridItem){
  const species = document.querySelector(gridItem + 'species');
  species.textContent = dino.species;

  const weight = document.querySelector(gridItem + 'weight');
  weight.textContent = dino.weight;

  const height = document.querySelector(gridItem + 'height');
  height.textContent = dino.height;

  const diet = document.querySelector(gridItem + 'diet');
  diet.textContent = dino.diet;

  const where = document.querySelector(gridItem + 'where');
  where.textContent = dino.where;

  const when = document.querySelector(gridItem + 'when');
  when.textContent = dino.when;

  const fact = document.querySelector(gridItem + 'fact');
  fact.textContent = dino.fact;
}


function generateRandomNumber(){
  return Math.floor(Math.random() * 3);     // returns a random integer from 0 to 2
}

// Build the infographic object argument
function buildInfographic(myObjects, grid){
  // Create a dynamic grid based on an array
  dynamicGrid = myObjects.map((dino) => {
    return `<div class="grid-item"><h2>${dino.species}</h2><img src="/images/${dino.image}" alt="${dino.species}" style="width:250px;height=250px;"><h3>${dino.weight}</h3><h3>${dino.height}</h3><h3>${dino.diet}</h3> <h3>${dino.where}</h3><h3>${dino.when}</h3><h3>${dino.fact}</h3></div>`; 
  })

  // Return a string - use join to remove comma
  return dynamicGrid.join("");
};


function DinoInfographic(myObjects){
  // Get the grid element
  infographicGrid = document.querySelector('#grid');
  test = buildInfographic(myObjects, infographicGrid);
  console.log(test);
  infographicGrid.innerHTML = buildInfographic(myObjects);

  console.log("Updated DOM");
}


    // Use IIFE to get human data from form
// Create a constructor
function objOther(species, weight, height, diet, where, when, fact, image){
  this.species = species;
  this.weight  = weight;
  this.height  = height;
  this.diet    = diet;
  this.where   = where;
  this.when    = when;
  this.fact    = fact;
  this.image   = image;
}

// Create a constructor
function templateObject(dino){
  this.species = dino.species;
  this.weight  = dino.weight;
  this.height  = dino.height;
  this.diet    = dino.diet;
  this.where   = dino.where;
  this.when    = dino.when;
  this.fact    = dino.fact;
  // Make sure the image name is lowercase
  this.image   = dino.species.toLowerCase() + ".png";
}

function createObjects(){
  let species = [];

  // Put the object in order
  species[0] = new templateObject(dinoData.Dinos[0]);
  species[1] = new templateObject(dinoData.Dinos[1]);
  species[2] = new templateObject(dinoData.Dinos[2]);
  species[3] = new templateObject(dinoData.Dinos[3]);
  species[4] = new objOther("Homosapien", "110", "65", "Herbivore", "", "", "", "human.png");
  species[5] = new templateObject(dinoData.Dinos[4]);
  species[6] = new templateObject(dinoData.Dinos[5]);
  species[7] = new templateObject(dinoData.Dinos[6]);
  species[8] = new templateObject(dinoData.Dinos[7]);
  
  // Return the defined objects
  return species;
}


// On button click, prepare and display infographic
dinoFormButton.addEventListener('click', (event) => {
  // Hide the Dino entry form
  hideDinoForm();

    // Create Human Object



  // Create the application objects
  const myObjects = createObjects();
  // Set the Human object from the user form
  formData(myObjects[4]);

  // Save the form data for comparison
  const myForm = myObjects[4];

  let coolInfo = myObjects.map((dino) => {
     let result = [];
     result = compareHeight(dino, myForm);
     result = compareWeight(dino, myForm);
     result = compareDiet(dino, myForm);
     return result;
  });

  // Draw the infographic
  DinoInfographic(coolInfo);
})
