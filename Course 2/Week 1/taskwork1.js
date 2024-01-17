/*
// Task 1 solution
var petDog = "Rex"
var petCat = "Pepper"
console.log(petDog)
console.log(petCat)
console.log("My pet dog's name is: ", petDog)
console.log("My pet cat's name is: " + petCat)
var catSound = "purr"
var dogSound = "woof"
console.log(petDog, "says", dogSound)
console.log(petCat, "says", catSound)
catSound = "meow"
console.log(petCat, "now says", catSound) 
*/

/*
//Task 2 solution

// Between 9 a.m. AND 5 p.m
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);

//if either OR
var currentTime = 7;
console.log(currentTime > 9 || currentTime < 17);

//switch LOGICAL NOT
var petHungry = true;
console.log('Pet is hungry: ', petHungry);
console.log('Feeding the pet');
console.log('Pet is hungry: ', !petHungry);
console.log(petHungry);

//MODULE (a small restaurant that has 4 chairs per table, and a total of 5 tables, suddenly receives 22 guests)
console.log(22 % 5); // 22/5= remainder 4/2=2

console.log(5 !== 5);
console.log(5 !== "5");
console.log("Note" + "Book");
console.log("Personal" + " Diary");
console.log(1+"2"+0);

var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri);

var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime);

var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."

*/
/*
//Task 3 solution

// 1.  logical && operator
var score = 8;
console.log("Mid-level skills:" ,score >0 && score< 10);

// 2. logical || operator
var timeRemaining = 0;
var energy = 10;
console.log("Game over:" ,timeRemaining == 0 || energy == 10);

//3.  modulus operator, %, to test if a given number is even
var num1=2;
var num2=5;
var test1=num1%2;
console.log("test1: ", test1);
var test2=num2%2;
console.log("test2: ", test2);
var result1= test1 == 0;
console.log("Is ", num1, "an even number? ", result1);
var result2= test2 == 0;
console.log("Is ", num2, "an even number? ", result2);

//4. Add numbers using the + operator
console.log(5+10);

//5. Concatenate numbers and strings using the + operator
var now="Now in ";
var three=3;
var d="D!";
console.log(now + three+ d);

//6. += operator to accumulate values in a variable
var counter = 7;
counter += 1;
counter += 2;
console.log(counter);
*/
/*
//Task 4 solution

//Traffic lights

var light = 'green';
if (light == 'green') {
    console.log("Drive")
} else if (light == 'orange') {
    console.log("Get ready")
} else if (light == 'red') {
    console.log("Don't drive")
} else {
    console.log("The light is not green, orange, or red")
}

var light = 'red'
switch (light) {
    case 'green':
        console.log("Drive")
        break;
    case 'orange':
        console.log("Get ready")
        break;
    case 'red':
        console.log("Don't drive")
        break;
    default:
        console.log('The light is not green, orange, or red');
        break;
}

//Are You Old Enough?
var age = 10
if (age >= 65) {
    console.log("You get your income from your pension")
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary")
} else if (age < 18) {
    console.log("You get an allowance")
} else {
    console.log("The value of the age variable is not numerical")
}

//Days
var day = "Sunday"
switch (day) {
    case 'Monday':
        console.log("Work")
        break
    case 'Tuesday':
        console.log("Sleep")
        break
    case 'Wednesday':
        console.log("Watch a movie")
        break
    case 'Thursday':
        console.log("Play basketball")
        break
    case 'Friday':
        console.log("Socialize")
        break
    case 'Saturday':
        console.log("Chill")
        break
    case 'Sunday':
        console.log("Have barbecue")
        break
    default:
        console.log("There is no such day")
        break
}


//Task 5 solution

//for loop
for (var i = 1; i <= 5; i++) {
    console.log(i);
}; console.log('Counting completed!');

for (var i = 5; i > 0; i--) {
    console.log(i);
}; console.log('Countdown finished!');

//while loop
var i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}; console.log('Counting completed!');

var i = 5;
while (i >0) {
    console.log(i);
    i=i-1 //i--;
}; console.log('Countdown finished!');

var year = 2018;
while (year<2023) {
    console.log(year);
    year++;
};



//Task 6 solution

//single loop
for (var firstNum = 0; firstNum < 2; firstNum++) {
    console.log(firstNum);
}
//single loop
for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(secondNum);
}

//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}

//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}

//nested loops - one inside another 
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}

// Task 7 solution 

var cubes = 'ABCDEFG'; //length=7
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

var cubes = 'ABCDEFG'; //length=7
//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

*/

// Task 8 solution 

for (var i = 1; i <= 10; i++) {
    if (i == 1) {
        console.log("Gold medal")
    }
    else if (i == 2) {
        console.log("Silver medal")
    }
    else if (i == 3) {
        console.log("Bronze medal")
    }
    else {
        console.log(i);
    }
}

for (var i = 1; i <= 10; i++) {
    switch (i) {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            console.log(i);
    }
}



for (i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        console.log("Hello");
    }
}


var i = 3;
var j = 5;

if(i == 3 && j < 5) {
  console.log("Hello");
} else {
  console.log("Goodbye");
}
