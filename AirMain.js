/* 
* This class holds information about an airplane.
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-12-16
*/

// Imports airplane class and jet subclass from their respective files
const Airplane = require("./Airplane.js");
const Jet = require("./Jet.js");

// Creates the biplane and setting its speed
let biplane = new Airplane();
biplane.setSpeed(212);
console.log(biplane.getSpeed());

// Creating a jetPlane and setting its speed
let jetPlane = new Jet();
jetPlane.setSpeed(422);
console.log(jetPlane.getSpeed());

// Loop that tests acceleration on each plane
for (let counter = 0; counter < 4; counter++) {    
  // speed up the jetPlane 
  jetPlane.accelerate();
  console.log(jetPlane.getSpeed());
  if (jetPlane.getSpeed() > 5000) {

    // Accelerating the biplane should the jetPlane plane speed be over 5000
    biplane.setSpeed(biplane.getSpeed() * 2);
  } else {
    // Accelerating the jetPlane 
    jetPlane.accelerate();
  }
}

// Printing out the final airspeed of the biplane
console.log(biplane.getSpeed());