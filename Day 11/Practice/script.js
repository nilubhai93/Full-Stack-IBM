// Define a Car object using a constructor function
// function Car(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
  
//     // Method to display car details
//     this.displayDetails = function () {
//       return `${this.brand} ${this.model} (${this.year})`;
//     };
//   }
  
//   // Create instances of the Car object
//   let car1 = new Car('Toyota', 'Corolla', 2020);
//   let car2 = new Car('Honda', 'Civic', 2019);
  
//   // Display details of the cars
//   console.log(car1.displayDetails()); // Output: Toyota Corolla (2020)
//   console.log(car2.displayDetails()); // Output: Honda Civic (2019)
  



// Define a Car class
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Method to display car details
  displayDetails() {
    return `${this.brand} ${this.model} (${this.year})`;
  }
}

// Create instances of the Car class
let car1 = new Car('Toyota', 'Corolla', 2020);
let car2 = new Car('Honda', 'Civic', 2019);

// Display details of the cars
console.log(car1.displayDetails()); // Output: Toyota Corolla (2020)
console.log(car2.displayDetails()); // Output: Honda Civic (2019)
