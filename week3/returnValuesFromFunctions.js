// Return values from functions
function consoleLog(val) {
    console.log(val)
    return val
}
consoleLog('hello')
// I can return values from one function to another function
// function that doubles a number
function doubleIt(num) {
    return num * 2;
}
// function that builds an onject with a specific value
function objectMaker(val) {
    return {
        prop: val
    }
}
console.log(objectMaker(20)); // { prop: 20 }

console.log(doubleIt(100)) // 200

// combine two functions
var result = objectMaker( doubleIt(20) );
console.log(result); // { prop: 40}