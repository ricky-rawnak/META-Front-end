/*
console.log("%cHello, World", "color: blue; font-size: 40px");

//-------------------------------------------------  Class work (variables)

var person;
var person = "Rose"
person;
console.log("Hello", person)
var greeting = "Hello"
console.log(greeting, person)
greeting = "hi"
person = "Coral"
console.log(greeting.person)
console.log(greeting, person)

//-------------------------------------------------  (operators)
console.log(2+2);
console.log(12-6+9+2);
console.log(32-19);
console.log(4*2);
console.log(14/2);
console.log(12>9);
console.log(12<9);
console.log(42==42);

//-------------------------------------------------  (number)
123
123.4566
2+2
4-4
3*3
27*3
27/3
10**2
2**2
9%8
2*3+2
2*(3+2)

//------------------------------------------------- (strings)
''
""
'hello'
"it's a lovely day"

//------------------------------------------------- (boolean)


//------------------------------------------------- strict inequality, which requires both the value and the data type to be different for a true result.

10<7
false
2>6
false
3>1
true
1==8
false
2==2
true
1!=2
true
2!=2
false
var score = 100
undefined
score
100
100 == "100" //converts the string "100" to a number and then compares it to 100.
true
100 == "200"
false
100 === "100" //100 is a number, and "100" is a string. They have different data types, and strict equality requires both the value and data type to match.
false
1!==1
false
1!=1
false
1!=="1"
true

// Between 9 a.m. and 5 p.m
var currentTime =10;
console.log(currentTime > 9 && currentTime > 17);

// Class work (conditions)
var result = 20;
if (result > 40) {
    console.log('you passed');
}
else {
    console.log('you did not pass');
}

var place = 'third';
if (place == 'first') {
    console.log('Gold');
} else if (place == 'second') {
    console.log('Silver');
} else if (place == 'third') {
    console.log('Bronze');
} else {
    console.log('No medal');
}

var place = 'first';
switch (place) {
    case 'first':
        console.log('Gold');
        break;
    case 'second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default:
        console.log('No medal');
}



// Class work (loops)
for(var i=1;i<=3;i++) {
    console.log(i)
} console.log("Go!!");

for(var i=10;i>0;i--) {
    console.log(i)
} console.log("Happy new year..");

var counter=3
while(counter>0){
    console.log(counter)
    counter=counter-1
}
*/

// Class work (nested loops)

for (var i = 1; i <= 2; i++) {
    for (var j = 1; j <= 7; j++) {
        console.log("Week " + i + " day " + j);
    }
} 

for (var year = 2023; year < 2025; year++) {
    console.log(year);
}

for (var year = 2023; year < 2025; year++) {
    console.log(year);
for (var month = 6; month < 9; month++) {
    console.log("-------------", month);
}
}