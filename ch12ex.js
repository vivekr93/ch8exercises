//Exercise 1
class Vehicle {

    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    honk() {
      return ("Beep!");
    }
  
    toString() {
      return (`The vehicle is a ${this.make} ${this.model} from ${this.year}.`);
    }
  }

//Exercise 2
class Car extends Vehicle  {
  constructor(make, model, year){
    super(make, model, year);
    this.numWheels = 4;
  }
}

//Exercise 3
class Motorcycle extends Vehcile {
  constructor(make, model, year){
    super(make, model, year);
    this.numWheels = 2;
  }

revEngine() {
    return ('VROOOM');
  }
}

//Exercise 4 

class Garage {
  constructor(capacity){
    this.capacity = capacity;
    this.vehicles = [];
  }

 add(vehicle) {
    if(vehicle instanceof Vehicle){
      if(this.vehicles.length < this.capacity){
        this.vehicles.push(vehicle);
        return("Your vehicle is now in the garage");
      }
      else return "Sorry, we're full.";
    }
    else return ("Only vehicles allowed!")
  } 
}
