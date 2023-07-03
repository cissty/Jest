## What I've Learned

During the development of this project, I've gained valuable experience and knowledge in the following areas:

- Test-Driven Development (TDD) using Jest
- Writing and organizing tests to ensure code quality and reliability
- Utilizing JavaScript functions to solve common problems
- Manipulating strings and arrays in JavaScript
- Working with basic arithmetic operations in a calculator function
- Applying algorithms such as the Caesar cipher to transform strings
- Analyzing arrays and extracting information such as average, minimum, maximum, and length

This project has not only helped me improve my JavaScript skills but has also provided hands-on experience with testing methodologies and problem-solving techniques. I look forward to applying what I've learned to future projects and continuing my growth as a developer.

## JavaScript Functions
This repository contains JavaScript functions that can be used for various purposes. The functions included are:

 ### capitalize
 A function that capitalizes the first letter of a string.
 ### reverseString
 A function that reverses a given string.
 ### calculator
 A simple calculator that performs basic arithmetic operations.
 ### caesarCipher
 A function that applies a Caesar cipher to a string, shifting each character by a given number of positions.
 ### analyzeArray
 A function that analyzes an array of numbers and returns an object with properties such as average, minimum, maximum, and length.

## Installation
To use these functions, follow these steps:

1. Clone the repository or download the code.
2. Make sure you have Node.js installed on your machine.
3. Run npm install to install the necessary dependencies.

## Usage
You can use these functions by requiring them in your JavaScript code. Here's an example:

```javascript
const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./path/to/functions');

// capitalize example
console.log(capitalize('hello')); // Output: 'Hello'

// reverseString example
console.log(reverseString('hello')); // Output: 'olleh'

// calculator example
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2

// caesarCipher example
console.log(caesarCipher('ABC', 1)); // Output: 'BCD'

// analyzeArray example
console.log(analyzeArray([1, 8, 3, 4, 2, 6])); // Output: { average: 4, min: 1, max: 8, length: 6 }
```
-------------------------- -------------------------
```javascript
Test Suites: 5 passed, 5 total
Tests:       20 passed, 20 total
```
-------------------------- -------------------------
Contributing
If you'd like to contribute to this project, you can submit a pull request with your improvements, bug fixes, or additional features. Contributions are welcome!