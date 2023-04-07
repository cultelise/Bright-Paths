///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
const galaAcres = [5, 2, 4, 3, 6, 2, 4];
const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

const fujiPrice = 0.89;
const galaPrice = 0.64;
const pinkPrice = 0.55;

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

// First, we initialize the totalAcres variable outside of the for loop to keep track of the total number of acres beyond the loop's scope.
let totalAcres = 0;

// Now, we want to loop over each array, adding the numbers to the totalAcres variable.
for (let acres of fujiAcres) {
  totalAcres += acres;
}
for (let acres of galaAcres) {
  totalAcres += acres;
}
for (let acres of pinkAcres) {
  totalAcres += acres;
}

// We log the result to see if it worked.
console.log(`Total acres picked: ${totalAcres}`);

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

// To calculate the number of acres per day, we can divide the number of acres by the number of days.
// There are seven days in a week, so it's obvious here how many days there are. However, we could also add a counter in the for loops above if we weren't sure.
let averageDailyAcres = totalAcres / 21;

console.log(`Average daily acres picked: ${averageDailyAcres}`);

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174;
let days = 0;

// CODE HERE

// We need to increment days by 1 and decrement acresLeft by 3 each loop until acresLeft is 0.
while (acresLeft > 0) {
  days += 1;
  acresLeft -= 3;
}

console.log(`Days of work left: ${days}`);

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// First we initialize the arrays.
let fujiTons = [];
let galaTons = [];
let pinkTons = [];

//Now, we loop through the original arrays and push the total number of tons picked per day to each new array (acres per day times tons per acre).
for (let acres of fujiAcres) {
  fujiTons.push(acres * 6.5);
}
for (let acres of galaAcres) {
  galaTons.push(acres * 6.5);
}
for (let acres of pinkAcres) {
  pinkTons.push(acres * 6.5);
}

console.log(`Daily Fuji tons picked: ${fujiTons}`);
console.log(`Daily Gala tons picked: ${galaTons}`);
console.log(`Daily Pink tons picked: ${pinkTons}`);

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE

// We already have the tons per day. Now we just need to loop through each new array of tons,
// and multiply each number by 2000--which is the number of pounds in a ton. We add that number to our pound variables.
let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;

for (let tons of fujiTons) {
  fujiPounds += tons * 2000;
}
for (let tons of galaTons) {
  galaPounds += tons * 2000;
}
for (let tons of pinkTons) {
  pinkPounds += tons * 2000;
}

console.log(`Fuji pounds picked: ${fujiPounds} lbs`);
console.log(`Gala pounds picked: ${galaPounds} lbs`);
console.log(`Pink pounds picked: ${pinkPounds} lbs`);

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// Now, we simply multiply the number of pounds per variety by the price per pound.
let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

console.log(`Fuji profit: $${fujiProfit}.00`);
console.log(`Gala profit: $${galaProfit}.00`);
console.log(`Pink profit: $${pinkProfit}.00`);

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

// We add each profit together.
let totalProfit = fujiProfit + galaProfit + pinkProfit;

console.log(`Total profit: $${totalProfit}.00`);
