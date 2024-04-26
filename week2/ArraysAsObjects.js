// In Javascript one of the most built in methods on arrays are push() and pop() methods
var fruits = [];
fruits.push("apple");
fruits.push("orange");
fruits.push("kiwi"); // ['apple', 'orange', 'kiwi']

// Remove last element from the array I can use pop() method
fruits.pop();
console.log(fruits); // ['apple', 'orange']

function arrayBuilder(one, two, three) {
    var arr = []
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var cityArray = new arrayBuilder('London', 'France', 'Paris');
console.log('City Array: ', cityArray);