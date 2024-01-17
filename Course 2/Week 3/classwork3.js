/*
//------------------------------------------------- Data function

//1
var shoes = 100 // data
var stateTax = 1.1
function totalPrice(price, tax) { // function
    return price * tax; // return value
}
var toPay = totalPrice(shoes, stateTax) // argument
console.log(toPay)

//2 functional programming
var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
    return amount * rate
}
currencyTwo = convertCurrency(currencyOne, exchangeRate)
console.log(currencyTwo)

//3
console.log('Hello');

function consoleLog(val) {
    console.log(val)
    return val
} consoleLog('Hello')

//4
function doubleIt(num) {
    return num * 2
} function objectMaker(val) {
    return {
        prop: val
    }
} 
objectMaker(20);
{ prop: 20 }
doubleIt(10).toString()
objectMaker( doubleIt(100) );
{prop: 200}
console.log(objectMaker)


//------------------------------------------------- Function recursion
//1
function example(){
    console.log('line one')
    console.log('line two')
    console.log('line three')
} example()
//2
let counter =3;
function example2(){
    console.log(counter)
    counter=counter-1
    if(counter===0) return
    example2()
} example2()
//3
function myDay() {
    console.log('Morning');
    console.log('Afternoon');
    console.log('Evening');
    myDay();
}
myDay()

//------------------------------------------------- Scope

//1

var num1=10
function score(){
    console.log(num1)
}
score()
//2
var num2=10 //global scope
function sc(){ //local scope
    var num3=20
    console.log(num3)
}
sc()

//3
var globalVar="I am in the global scope"
function scopeTest(){
    var localVar="I am scoped to the function"
}


//-------------------------------------------------Scoping with var, let and const

//1 scope
var num1=10
function score(){
    var num2=20
    console.log(num2)
}

//2 block scope
let color='red';
if(color=='red'){
    let color ='blue';
} console.log(color)

//3 ES5
var user="Miranda"
let user="Miranda" //when change var
const user="Miranda" //never change var

//4 var
console.log(user)
var user="Mary"
var user="Rock"
var user="Steve"
console.log(user)
//var user

//5 Let
let users
console.log(users)
users="Mary"
console.log(users)

//6 const
const userConst="Amy"
//userConst="Anna"
console.log(userConst)

//------------------------------------------------- OOP

//1
var cake=100;
var stateTaxs=1.2;
function totalPrices(cake, taxs){
    return cake*taxs
} var toPays=totalPrices(cake,stateTaxs)
console.log(toPays)

//2
var purchase1={
    cake: 100,
    stateTaxs:1.2,
    totalPrices: function(){
        var calculation=purchase1.cake*purchase1.stateTaxs;
        console.log('Total price: ',calculation);
    } 
}
purchase1.totalPrices();

//3
var purchase2={
    cake: 50,
    stateTaxs:1.2,
    totalPrices: function(){
        var calculation=purchase2.cake*purchase2.stateTaxs;
        console.log('Total price: ',calculation);
    } 
}
purchase2.totalPrices();

//4 this approach
var purchase1={
    cake: 100,
    stateTaxs:1.2,
    totalPrices: function(){
        var calculation=this.cake*this.stateTaxs;
        console.log('Total price: ',calculation);
    } 
}
purchase1.totalPrices();
var purchase2={
    cake: 50,
    stateTaxs:1.2,
    totalPrices: function(){
        var calculation=this.cake*this.stateTaxs;
        console.log('Total price: ',calculation);
    } 
}
purchase2.totalPrices();


//------------------------------------------------- class

//1
class Car{
    constructor(color,speed){
        this.color=color;
        this.speed=speed;
    }
    turboOn(){
        console.log("Turbo is on!");
    }
}
const car1=new Car("red",120)
car1.turboOn()

//2
class Animal { }
var myDog = Object.create(Animal)
console.log(Animal)

//3
class Animal1{}
    var myDog1=new Animal1()
    console.log(Animal1)

//4
class Animal2{}
class Bird extends Animal2 {}
class Eagle extends Bird{}  

//"abc".toUpperCase()

//5 polymorphism
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}
bicycle.bell();
door.bell(); 
function ringTheBell(thing) {
    console.log(thing.bell())
}
ringTheBell(bicycle);
ringTheBell(door); 


//6
class Birds{
    useWings(){
        console.log("Fly Fly")
    }
}
class Eagles extends Birds{ //subclass
    useWings(){ //method 
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Birds{ //subclass
    useWings(){ //method 
        console.log("Diving!")
    }
}
var baldEagle= new Eagles();
var kingPenguin=new Penguin();
baldEagle.useWings();
kingPenguin.useWings();

//7
// create your classes here
class Daily{
    routineWork(){
        console.log("To do list!")
    }
}
class Morning extends Daily{
    routineWork(){
        console.log("Have breakfast")
    }
}
class Noon extends Daily{
    routineWork(){
        console.log("Have Lunch")
    }
}
class Night extends Daily{
    routineWork(){
        console.log("Go to sleep")
    }
}
var newMorning=new Morning()
var newNoon=new Noon()
var newNight=new Night()

newMorning.routineWork()
newNoon.routineWork()
newNight.routineWork()

//------------------------------------------------- Constructors

//1
function Icecream(flavour){
    this.flavour=flavour
    this.meltIt=function(){
        console.log(`The ${this.flavour} icecream has melted`)
    }
}
let kiwiIcecream=new Icecream("Kiwi")
let MangoIcecream=new Icecream("Mango")
kiwiIcecream;
MangoIcecream;

// new Date();
// new Error();
// new Map();
// new Promise();
// new Set();
// new WeakSet();
// new WeakMap();


//------------------------------------------------- Inheritance 

//1
var bird={
    hasWings:true,
    canFly:true,
    hasFeathers:true
};
var sparrow1=Object.create(bird)
console.log("Sparrow1: ",sparrow1)
console.log("Sparrow1 can fly: ",sparrow1.canFly)
console.log("Sparrow1 has feathers: ",sparrow1.hasFeathers)

var sparrow2=Object.create(bird)
console.log("Sparrow2 can fly: ",sparrow2.canFly)

var Penguin=Object.create(bird)
Penguin.canFly=false
console.log("Penguin can fly: ",Penguin.canFly)

//------------------------------------------------- OO Program

//1

class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if (this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if (this.energy == 0) {
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}
class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy) {
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}


var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!

//------------------------------------------------- For of loops and objects

//1
const car={
    speed:100,
    color:"Black"
}
for (prop of car){ //TypeError: car is not iterable
    console.log(prop)
}


//2
const colors=['red','blue','pink']
for(var color of colors){
    console.log(color)
}

//3
const car2={
    speed:200, //keys: values
    color: "red"
}
    console.log(Object.keys(car2))

//4    
const car3={
    speed:300,
    color: "blue"
}
    console.log(Object.values(car3))

//5
const car4={
    speed:400,
    color: "pink"
}
    console.log(Object.entries(car4))

//6
const clothingItem={
    price:50,
    color:'olive',
    material:'cotton',
    season:'autumn'
}
for(const key of Object.keys(clothingItem)){
    console.log(key, ":", clothingItem[key])
}

//7
function testBracketsDynamicAccess(){
    var dynamicKey;
    if(Math.random()>0.5){
        dynamicKey='speed'
    } else{
        dynamicKey='color'
    }
    var drone={
        speed:15,
        color:'orange'
    }
    console.log(drone[dynamicKey])
}
testBracketsDynamicAccess()


//------------------------------------------------- For IN/OF loop-objects 2

//1
const car={ //object
    engine: true, //properties
    steering:true,
    speed:"slow"
}
const sportsCar=Object.create(car) //inherits the properties of the car variable
sportsCar.speed="fast"
console.log("The sportsCar object: ", sportsCar)

console.log('---- for in unreliable ----')
for (prop in sportsCar){                                    //for-in loop 
    console.log(prop)
}
console.log('🤔'," Iterarting over object and its prototype!")

console.log('---- for of reliable ----')
for (prop of Object.keys(sportsCar)){                       //for-of loop
    console.log(prop+": "+sportsCar[prop])
}
console.log('🎯'," Iterarting over object's own prototype only!")


//2
const car={
    engine: true
}
const sportsCar=Object.create(car)
sportsCar.speed="fast"
console.log("The sportsCar object: ", sportsCar)

for (prop in sportsCar){
    console.log('🤔',prop)
}
for (prop of Object.keys(sportsCar)){
    console.log('🎯',prop+ ": "+sportsCar[prop])
}


//------------------------------------------------- Template literals

//1
let greet = "Hello"
let name = "Tina"
console.log(`${greet} ${name}!`)

//2
let city = "New York, "
let country = "USA"
console.log(city + " " + country + "!")

//3
console.log(`${1 + 1 + 1 + 1 + 1} stars!`)

//4
let noMultiline = "No multi line strings in ES5"
console.log("Did you know? " + noMultiline)

//5
let multiline = `
    using ES5
    backsticks
    multiline 
    strings are
    possible
`;
console.log(multiline)

//6
let first=`Richard said,"Don't you know? ES6 , it's got some features!"`;
let second=`"Wouldn't you want to learn more?",he asked.`;
console.log(`${first} - and I got curious. ${second}`)


//------------------------------------------------- Data structure

//1
const grades=[93,85,72,40,89,65]
let gradeSum=0;
for( i=0;i<grades.length;i++){
    gradeSum+=grades[i]
}
console.log(gradeSum/grades.length)

//2 forEach()

const fruits=['mango','apple','banana','pear','kiwi','papaya']
function appendIndex(fruit,index){
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex)

//3
const veggies=['onion','garlic','potato','broccoli','cucumber']
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`)
});

//4 filter
const nums = [0,10,20,30,40,50];
console.log(nums.filter( function(num) {
    return num > 20;
}))

//5 map
console.log([0,10,20,30,40,50].map(function(num){
    return num/10
}));

//6 
const result=[]
const drone={
    speed:100,
    color:'yellow'
}
const dronekeys=Object.keys(drone)
dronekeys.forEach(function(key){
    result.push(key,drone[key])
})
console.log(result)

//7 map
let bestBoxers=new Map()
bestBoxers.set(1, "The Champion")
bestBoxers.set(2, "The Runner-up")
bestBoxers.set(3, "The third place")
//bestBoxers.get(1)
console.log(bestBoxers)

//8
const repetitiveFruits=['apple','kiwi','plum','kiwi','pear','pear']
const uniqueFruits=new Set(repetitiveFruits)
console.log(uniqueFruits)


//------------------------------------------------- Spread and Rest

//1
const cities=['dhaka','chittagong','comilla']
const countries=['bangladesh','nepal']
const citiesAndCountries=[...cities, ...countries]
console.log(citiesAndCountries)

//2
const flying={wings:2}
const car={wheels:4}
const flyingCar={...flying, ...car}
console.log(flyingCar)

//3
let veggies=['onion','cabbage']
veggies=[...veggies, 'carrot', 'beetroot']
console.log(veggies)

//4
const greeting="ricky"
const arrayOfChars=[...greeting]
console.log(arrayOfChars)

//5
const car1={
    speed:200,
    color:'yellow'
}
const car2={...car1}
car1.speed=201
console.log(car1.speed, car2.speed)

//6
const f1=['apples','pears']
const f2=[...f1]
f1.pop()
console.log(f1, "not", f2)

*/


