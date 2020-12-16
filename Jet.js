/* 
* This class is a subclass or airplane holding information about a jet.
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-12-16
*/

// Importing the airplane class from another file
const Airplane = require("./Airplane.js");

// This airplane subclass is a jet
class Jet extends Airplane {

  // Constructor that defines fields
  constructor() {
    super();
    this.multiplier = 2;
  }

  // method to set the speed of the jet
  setSpeed(speed) {
    super.setSpeed(speed * this.multiplier);
  }

  // method to accelerate the jet
  accelerate() {
    super.setSpeed(this.getSpeed() * 2);
  }
}

// Exporting subclass
module.exports = Jet;