/*
//------------------------------------------------- Function

//1 with parameters
function addTwoNums(a,b){
    //body of the function
   
    var c=a+b;
    console.log(c);
}
addTwoNums(5,8);
addTwoNums(2,2);

//2 without parameters
function hello(){
    console.log("hello");
}
hello();

//------------------------------------------------- Arrays
var train1=["car","bike","plane","boat","cycle"];
console.log(train1[3]);

//------------------------------------------------- Object

// var storeManager={}
// storeManager.rangeTilesPerTurn=4;
// storeManager.socialSkills=50;
// storeManager.streetSmarts=50;
// storeManager.health=30;
// storeManager.specialAbility="finding business opportunities ";
// storeManager.greeting="Let's make some money";


var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}; console.log(assistantManager);

var table = {
    legs: 3,
    color: "wood",
    priceUSD: 100
}; console.log(table.color);

var house={
    room:3,
    color: "white",
    price: 4000
};
var house2={};
house2.rooms=4;
house2.color="brown";
house2.price=8000;
console.log(house);
house.window=8;
console.log(house);




//------------------------------------------------- array-object

var fruits=[];
fruits.push("apple");
fruits.push('pear');

fruits.pop(); //remove last item
console.log(fruits);


function arrBuilder(one, two, three){
var arr=[];
arr.push(one);
arr.push(two);
arr.push(three);
return arr;
//console.log(arr);
}
// arrBuilder('apple','mango','coconut');
var simpleArr=arrBuilder('apple','mango','coconut');
console.log(simpleArr);


//------------------------------------------------- math object

//1 random (no between 0 and 0.99)
Math.random() ;
var decimal=Math.random() ;
console.log(decimal);
console.log(decimal*10);

//2 ceil

var rounded=Math.ceil(0.001);   //1
var rounded=Math.ceil(0.5); //1
var rounded=Math.ceil(0.99); //1
var rounded=Math.ceil(1.5); //2
var rounded=Math.ceil(2.99); //3
console.log(rounded);

var myNum = Math.ceil(2.49);
console.log(myNum); 


//------------------------------------------------- Loop over arrays

//1
var letters= ['a','b','c'];
//var letters= ["abc"];
for (var i=0;i<letters.length;i++){
    console.log(letters[i]);
}

//2

var veggies=['onion','parsley','carrot','broccoli']; //[0 1 2 3]
console.log(veggies.length);
console.log(veggies[0]);
console.log(veggies[1]);
for (var i=0;i<veggies.length;i++){
    console.log(veggies[i]);
}

//3
var greetings='ricky'; 
console.log(greetings.length);
console.log(greetings[0]);
console.log(greetings[1]);
for (var i=0;i<greetings.length;i++){
    console.log(greetings[i]);
}

//4

var greet='Hello';
var user=' Rabeya';

//console.log(greet.pop());
console.log(greet + user);
console.log(greet.concat(user ));


//5

// charAt() 
// concat() 
// indexOf() 
// lastIndexOf() 
// split() 
// toUpperCase() 
// toLowerCase()  

var greet = "Hello, ";
var place = "World"
console.log(greet.length);
console.log(greet.charAt(4)); 
console.log("Wo".concat("rl").concat("d"));  
console.log("ho-ho-ho".indexOf('h')); 
console.log("ho-ho-ho".indexOf('o')); 
console.log("ho-ho-ho".indexOf('-'));
console.log("la-la-la".split("-")); 
console.log(greet.toUpperCase()); 
console.log(greet.toLowerCase());  


//------------------------------------------------- type of


var test1=typeof('okk');
var test2=typeof(true);
var test3=typeof(false);
var test4=typeof(10);
var test5=typeof(3.14);
var test6=typeof(1<2);
var test7=typeof([1,2,3]);
var test7=typeof(function abc(){console.log('abc');});
var test8=typeof({firstProperty: 1})


console.log(test1,test2, test3, test4, test5, test6, test7, test8);

//------------------------------------------------- try-catch

//1
try{
    console.log(c+d)
} catch(err){
   
}
console.log('This line now runs..')

//2
try{
    //console.log(c+d)
    throw new Error()
} catch(err){
    console.log(err)
}
console.log('This line now runs..')

//3

try{
    console.log(a+b)
} catch(err){
    console.log('there was an error ')
    console.log('the error was saved in the error log')
}
console.log('This program does not stop..')


//4

try{
    throw new ReferenceError();
} catch(err){
    console.log(err)
    console.log('there was a reference error')
}
console.log('This program does not stop..')


//------------------------------------------------- Undefined, null and empty values

//1
var letters='abc';
letters.match(/d/)


//2
var game={
    score: 1000
}
game.score


*/