/* 
* This class holds information about an airplane.
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-12-16
*/

class Airplane {
  // Constructor that constructs fields
  constructor() {
    this.speed = 0;
  }

  // This method gets current airspeed
  getSpeed() {
    return this.speed;
  }
  // This method sets current airspeed
  setSpeed(speed) {
    this.speed = speed;
  }
}

// Exporting the class
module.exports = Airplane;