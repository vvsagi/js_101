/* Numbers in JS */

// assigning values

const int = 10;
const float = 10.1;

console.log(typeof int, int);
console.log(typeof float, float);

// JS doesn't differentiate between numbers

// addition
console.log(1+1)
// subtraction
console.log(10-4)
// multiplication
console.log(40*10)
// division
console.log(40/10);
// modulo(remainder)
console.log(10%4);

// exponent
console.log(10**5);

/* strings and numbers together */
// numbers added to string becomes string

console.log('total: ' + 10);

console.log(10 + '10');

const stringInNumber = '900';
const numberFromString = parseInt(stringInNumber);
console.log(numberFromString);

console.log(parseInt('potato'));

if (isNaN('hello')) {
    console.log("that's not a number");
}
else {
    console.log('nice number');
}