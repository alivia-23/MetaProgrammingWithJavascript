var car = {};
car.color = 'red';
car.price = '$3000'
console.log(car);

car.startEngine = function() {
    console.log('The engine is running')
}
car.lightsOn = function() {
    console.log('The lights are on!')
}
console.log(car);
car.startEngine();
car.lightsOn();