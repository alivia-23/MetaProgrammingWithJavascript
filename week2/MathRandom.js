// Math.Random()
// Generate a decimal number between 0 to 0.99
Math.random();
var decimal = Math.random();
console.log(decimal);

// To get a random number greater than 1 we need to mutiply by 10
console.log(decimal * 10);

// Math.ceil() method basically rounds up to the upper limit
var rounded = Math.ceil(0.0001);  // output -> 1
var rounded = Math.ceil(0.5); // output -> 1
var rounded = Math.ceil(1.01); // output -> 2
console.log(rounded);