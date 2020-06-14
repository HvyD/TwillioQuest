class Ducktypium {
  constructor(color) {
    // your code here
    this.color = color;
    this.calibrationSequence = [];
  }

  // your code here
  refract(addColor){

    try {
    refract(addColor)
    }
    catch(e) {
      if(this.color != 'red'){
          throw new SyntaxError("Only Red, Green, Yellow!!");
        }
      if(this.color != 'green'){
        throw new SyntaxError("Only Red, Green, Yellow!!");
      }
      if(this.color != 'yellow'){
        throw new SyntaxError("Only Red, Green, Yellow!!");
      }

    }
    finally {
      if(this.color === ('red') && addColor === ('blue')) {
        return 'purple';
      }
      else if (this.color === ('red') && addColor === ('yellow')){
        return 'orange';
      }
      else if(this.color === ('yellow') && addColor === ('blue')){
        return 'green';
      }
      else{return addColor};
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
const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
