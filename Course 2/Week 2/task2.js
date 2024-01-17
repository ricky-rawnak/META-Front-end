/*
//------------------------------------------------- Task 1 array

//1
function listArrayItem(arr){
    for(var i = 0; i < arr.length; i++) {
        console.log(i,arr[i]);
    }
}
var colors=["red","blue","green","yellow","white","black","purple"];
listArrayItem(colors);

//2
function listArrayAddItem(arr){
    for(var i = 0; i < arr.length; i++) {
        console.log(i+1,arr[i]);
    }
}
var colors=["red","blue","green","yellow","white","black","purple"];
listArrayAddItem(colors);

//3
function conArrayItem(arr){
    for(var i = 0; i < arr.length; i++) {
        if(arr[i]=="red"){
        console.log(i*100,"capsicum");
        } else{
            console.log(i*100,arr[i]);
        }
    }
}
var colors=["red","blue","green","yellow","white","black","purple"];
conArrayItem(colors);


//------------------------------------------------- Task 2 array

function letterFinder(word,match){
    for(var i=0;i<word.length;i++){
        if (word[i]==match){
         console.log('Found the', match, 'at',i);   
        } else{
            console.log('---No match found at',i);
        }
    }
}
letterFinder("tattletale","t");

//------------------------------------------------- Task 3 object

var user = {};
//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
};
var table = {
    legs: 3,
    color: "black",
    priceUSD: 110
};
console.log(table);
console.log(table.color);

var house = {
    rooms: 3,
    color: "black",
    priceUSD: 20000
};

var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

console.log(house);
house.windows = 10;
console.log(house);

house.windows = 11;
console.log(house); 

var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); 


var house2 = {};
house2["rooms"] = 4;
house2['color'] = "white";
house2["priceUSD"] = 12345;
console.log(house2);

var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 220;
car.speed = 120;
console.log(car);

car["number of doors"] = 4;
console.log(car);

car["2023"] = 1901;
console.log(car);

//
var arrKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
};
for(var i=0;i<arrKeys.length;i++){
    console.log(drone[arrKeys[i]]);
}

//------------------------------------------------- Task 4 array-object

//object {}
//array []

//1
var clothes=[];
clothes.push('jacket','jeans','skirt','kurta','gown');
// clothes.push('jacket'); // 1st item of clothing
// clothes.push('jeans'); // 2nd item of clothing
// clothes.push('skirt'); // 3rd item of clothing
// clothes.push('kurta'); // 4th item of clothing
// clothes.push('gown'); // 5th item of clothing
clothes.pop();
//clothes.pop('jacket','jeans','skirt','kurta','gown');
clothes.push('socks');
console.log(clothes[2]);

var favCar={};
favCar.color='red';
favCar.convertible = true;
console.log(favCar);


//2

//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()

// ------------------------------------------------- Task 5

var result = "Hello".indexOf('l');
console.log(result);


var clothes = [];
clothes.push('gray t-shirt');
clothes.push('green scarf');
clothes.pop();
clothes.push('slippers');
clothes.pop();
clothes.push('boots');
clothes.push('old jeans');
console.log(clothes.length)

var food = [];
  food.push('Chocolate');
  food.push('Ice cream');
  food.push('Donut');

  console.log(food[1])

  var dog = {
    color: "brown",
    height: 30,
    length: 60
};
dog["type"] = "corgi";
console.log(dog)

function add(a, b) {
    return a + b; //parameters
}
console.log(add(3,9))



// ------------------------------------------------- Task 6 error handling

//1 reference error

console.log(username) //ReferenceError: username is not defined

//2 syntax error

var a "Theres no assignment operator"; //SyntaxError: Unexpected string

//3 type error

"hello".pop() //TypeError: "hello".pop is not a function at Object.

 //4 range error

 (10).toString(2);
 (10).toString(8);
 (10).toString(100); //error

// ------------------------------------------------- Task 7 Error prevention

//1

function addTwoNums(a, b) {
    console.log(a + b)
}
addTwoNums(5, "5")

//2

function addTwoNums(a, b) {
    try {
        console.log(a + b)
    } catch (err) {
        console.log(err)
    }
}

//3

function addTwoNums(a, b) {
    try {
        if(typeof(a)!='number'){
            throw new ReferenceError('the first argument is not number')
        } else if(typeof(b)!='number'){
            throw new ReferenceError('the second argument is not number')
        }  else{
            console.log(a + b)
        }
    } catch (err) {
        //console.log(err)
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log('It still works..')


// ------------------------------------------------- Task 8 Defensive programming

function letterFinder(word, match) {
    var condition1 = typeof (word) == 'string' && word.length >= 2;
    var condition2 = typeof (match) == 'string' && match.length == 1;
    if (condition1 && condition2) {

        for (var i = 0; i < word.length; i++) {
            if (word[i] == match) {
                console.log('Found the ', match, 'at ', i)
            } else {
                console.log('---No match found at ', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.")
    }
}
letterFinder(3,6)
letterFinder([],[])
letterFinder("cat", "c")


//1
var result = null;
console.log(result);

//2
try {
    console.log('Hello');
} catch (err) {
    console.log('Goodbye');
}

//3
var x;

if (x === null) {
    console.log("null");
} else if (x === undefined) {
    console.log("undefined");
} else {
    console.log("ok");
}

//4
throw new Error();
console.log("Hello");


try {
console.log('hello)
} catch(e) {
console.log('caught')
}

*/
var burger = ["bun", "beef", "lettuce", "tomato sauce", "onion", "bun"];
console.log(burger[2]);

try {
    throw new Error();
    console.log('Hello');
} catch (err) {
    console.log('Goodbye');
}

function add(a, b) {
    console.log(a + b)
}

add(3, "4");

var result;
console.log(result);

var str = "Hello";
var result = str.match("jello");
console.log(result);

try {
    Number(5).toPrecision(300)
} catch (e) {
    console.log("There was an error")
}

