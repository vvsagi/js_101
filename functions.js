// can think of functions as a recipe
// It has input, fucntion and output

function add(num1, num2) {
  return num1 + num2;
}

function add2(num1, num2) {
  console.log(num1 + num2);
}

console.log(add(1,2));
console.log(add2(1,2));

const total = add(5, 10);
const output = `The total is: ${total}`; //this a string literal
console.log(output);