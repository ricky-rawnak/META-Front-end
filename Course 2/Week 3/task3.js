/*
//------------------------------------------------- Task 1 functional programming paradigm

//1
function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
console.log(total);

//2
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!


//3
//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

//4
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;
    console.log(message, style)
}


// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log("Invalid reason");
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
//function consoleStyler() {
    consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!')
    celebrateStyler('birthday')
//}

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate() {
    consoleStyler('ef7c8e', 'fae8e0', '30px', 'You made it!');
    celebrateStyler('champions');

}
// Call styleAndCelebrate
styleAndCelebrate()


//------------------------------------------------- Task 2 let,var,const

//1

var globalVar = 77;
function scopeTest() {
    var localVar = 88;
}
console.log(localVar); //not defined

//2
function meal(animal) {
    animal.food = animal.food + 10;
}
var dog = {
    food: 10
};
meal(dog); //10
meal(dog); //10
console.log(dog.food);

//3

function two() {
    return 2;
}

function one() {
    return 1;
}

function calculate(initialValue, incrementValue) {
    return initialValue() + incrementValue() + incrementValue();
}

console.log(calculate(two, one));


//------------------------------------------------- Task 3 class

//
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.


//2
class StationaryBike{
    constructor(position,gears){
        this.position=position
        this.gears=gears
    }
}
class Treadmill{
    constructor(position,modes){
        this.position=position
        this.modes=modes
    }
}
class Gym{
    constructor(openHrs,strBikePos,treadmillpos){
        this.openHrs=openHrs
        this.strBikePos=new StationaryBike(strBikePos,8)
        this.treadmillpos=new Treadmill(treadmillpos,5)
    }
}
var boxingGym=new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs)
console.log(boxingGym.strBikePos)
console.log(boxingGym.treadmillpos)

//------------------------------------------------- Task 4 Default Parameters

//1
function noDefaultParams(number){
    console.log('Result: ',number*number)
}
noDefaultParams() //NaN

//2
function noDefaultParams(number=2){
    console.log('Result: ',number*number)
}
noDefaultParams() //4

//3
class noDefaultParams{
    constructor(n1, n2, n3, s1, b1){
        this.n1 = n1
        this.n2 = n2
        this.n3 = n3
        this.s1 = s1
        this.b1 = b1
    }
    calculate(){
        if (this.b1) {
            console.log(this.s1, this.n1 + this.n2 + this.n3)
            return
        }
        return "The value of b1(bool1) is incorrect! "
    }
}
var fail = new noDefaultParams(1, 2, 3, false)
fail.calculate()

//4
class WithDefaultParams{
    constructor(num1=1,num2=2,num3=3,string1="Result: ",bool1=true){
        this.num1 = num1
        this.num2 = num2
        this.num3 = num3
        this.string1 = string1
        this.bool1 = bool1
    }
    calculator(){
        if (this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3)
            return
        }
        return "The value of b1(bool1) is incorrect! "
    }
}
var better = new WithDefaultParams()
better.calculator()

//------------------------------------------------- Task 5 oo prog
// Task 1: Code a Person class
class Person{
    constructor(name="Tom",age=20,energy=100){
        this.name=name
        this.age=age
        this.energy=energy
    }
    sleep(){
        this.energy +=10
    }
    doSomethingFun(){
        this.energy -=10
    }
}
// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name="Tom",age=20,energy=100,xp=10,hourlyWages=10){
        super(name,age,energy)
        this.xp=xp
        this.hourlyWages=hourlyWages
    }
    goToWork(){
        this.xp +=10
    }
}
// Task 3: Code an intern object, run methods
function intern() {
    const internObj= new Worker("Bob",21,110,0,10)
    internObj.goToWork()
    return internObj
}

// Task 4: Code a manager object, methods
function manager() {
    const managerObj=new Worker("Alice",20,120,100,30)
    managerObj.doSomethingFun()
    return managerObj
}
const internObj=intern()
console.log(internObj)
const managerObj=manager()
console.log(managerObj)


//1
class Cake {
    constructor(lyr) {
        this.layers = lyr + 1;
    }
}
var result = new Cake(1);
console.log(result.layers);

//2
class Animal {
    constructor(lg) {
        this.legs = lg;
    }
}
class Dog extends Animal {
    constructor() {
        super(4);
    }
}
var result = new Dog();
console.log(result.legs);

//3
class Animal {

}
class Cat extends Animal {
  constructor() {
    super();
    this.noise = "meow";
  }
}
var result = new Animal();
console.log(result.noise);

//4
class Person {
    sayHello() {
        console.log("Hello");
    }
}
class Friend extends Person {
    sayHello() {
        console.log("Hey");
    }
}
var result = new Friend();
result.sayHello();

//------------------------------------------------- Task 6 Array and object iteration

//1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (const prop of dairy) {                       //for-of loop
        console.log(prop)
    }
}
logDairy()


//2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
function birdCan() {
    for (const key of Object.keys(bird)) {
        console.log(`${key}: ${bird[key]}`)
    }
    }

birdCan()

//3
function animalCan() {
    for (const key in bird) {
        console.log(`${key}: ${bird[key]}`)
    }
    
}
animalCan()


//------------------------------------------------- Task 7 Advanced JavaScript Features

//set stores unique item
//for loop uses iterable such as arrays
//1
const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);

//2
let food = "Chocolate";
console.log(`My favourite food is ${food}`);

//3
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);
console.log(set)

//4
let obj = {
    key: 1,
    value: 4
};
let output = { ...obj };
output.value -= obj.key;
console.log(output.value);

//5
function count(...basket) {
    console.log(basket.length)
}
count(10, 9, 8, 7, 6);

*/
//------------------------------------------------- Task 8 Programming Paradigms

//1
function scopeTest() {
    var y = 44;

    console.log(x);
}
var x = 33;
scopeTest();

//2
class Cake {
    constructor(lyr) {
        this.layers = lyr;
    }

    getLayers() {
        return this.layers;
    }
}

class WeddingCake extends Cake {
    constructor() {
        super(2);
    }

    getLayers() {
        return super.getLayers() * 5;
    }
}

var result = new WeddingCake();
console.log(result.getLayers());

//3
class Animal {

}
class Dog extends Animal {
    constructor() {
        super();
        this.noise = "bark";
    }
    makeNoise() {
      return this.noise;
    }
}
class Wolf extends Dog {
    constructor() {
        super();
        this.noise = "growl";
    }
}
var result = new Wolf();
console.log(result.makeNoise());

//4
const  [a, b]  =  [1,2,3,4]
console.log(b)

//5
function count(...food) {
    console.log(food.length)
}
count("Burgers", "Fries", null);

//6
const letter = "a"
letter = "b"