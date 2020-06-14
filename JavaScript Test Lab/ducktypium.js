class Ducktypium {
    constructor(color) {
        this.color = color;
        if (this.color != "red" && this.color != "blue" && this.color != "yellow") {
            throw ("Color must be red, blue or yellow");
        }
        this.calibrationSequence = [];
    }


    refract(color) {
        if (color != "red" && color != "blue" && color != "yellow") {
            throw ("Color must be red, blue or yellow");
        } else if (this.color == color) {
            return color;
        } else if (this.color == "red" && color == "blue") {
            return "purple";
        } else if (this.color == "blue" && color == "red") {
            return "purple";
        } else if (this.color == "red" && color == "yellow") {
            return "orange";
        } else if (this.color == "yellow" && color == "red") {
            return "orange";
        } else if (this.color == "yellow" && color == "blue") {
            return "green";
        } else if (this.color == "blue" && color == "yellow") {
            return "green";
        }

    }
    calibrate(arr) {
      arr.sort();
      this.calibrationSequence = arr.map(function(x) { return x * 3; });
      return this.calibrationSequence;


  }
}



// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const dt = new Ducktypium('black');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
