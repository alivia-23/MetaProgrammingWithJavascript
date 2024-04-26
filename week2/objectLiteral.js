//Building an object in JavaScript is using the object literal syntax: {}.
var user = {} // Create an empty user object

// Creating an object with properties and their values
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
console.log(table);
console.log(table.color);

var house = {}
house.rooms = 4;
house.bathrooms = 2.5;
house.kitchen = 1;
house.color = 'beige';
house.priceUSD = '$650000'
console.log('House Description: ', house);
console.log('House price: ',house.priceUSD);
console.log('House Color: ',house.color);