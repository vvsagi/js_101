// Strings

// A literal is a value that is not assigned to a variable
// eg.
// console.log("Hello World")

// const greeting = 'Hello world!'

// // single quote
// 'Hello World'
// // double quote
// "Hello World"
// //string that spans multiple lines
// `hello 
// world`

// // we can use single quotes inside of double quotes string
// "You're amazing!"

// // we can similarly use double quotes inside of single quotes
// 'Hello "Doctor"'

// // if we need to use both then it gets a little interesting
// // we can escape characters

// "You're a \"good\" developer, Vivek!" // gee, thanks

// // backticks allow for multi-line strings
// `This is a sting 
// that goes 
// on multiple 
// lines`

// "This is a string
// that goes across 
// multiple 
// lines"

// backticks are called template literals

const greeting = 'Hello'
const output = greeting + ', My name is Vivek'

console.log(output)

// or

const outputTemplateUseCase = `${greeting}, My name is Vivek`
console.log(outputTemplateUseCase)  