// 'use strict';

/**
 * * Scenario: logging variables before declaration
 */
console.log(me); // undefined ->  variables declared with var keyword will be hoisted but they are hoisted to the value of undefined
console.log(job); // ReferenceError: Cannot access 'job' before initialization
console.log(year); // ReferenceError: Cannot access 'year' before initialization

var me = "Shash";
let job = "developer";
const year = 2021;

/**
 *  * Scenario: logging and calling functions before initialization
 */

// Functions
// Function Declaration
console.log(addDeclaration(2, 3)); // 5
function addDeclaration(a, b) {
  return a + b;
}

// Function Expression
console.log(addExpression(2, 3)); // ReferenceError: Cannot access 'addExpression' before initialization
const addExpression = function (a, b) {
  return a + b;
};

console.log(addExpression(2, 3)); // Uncaught TypeError: addExpression is not a function
var addExpression = function (a, b) {
  return a + b;
};

// Arrow Function
console.log(addArrow(2, 3)); // ReferenceError: Cannot access 'addArrow' before initialization
const addArrow = (a, b) => a + b;

console.log(addArrow(2, 3)); // Uncaught TypeError: addArrow is not a function
var addArrow = (a, b) => a + b;

// Practice Example1 - Hoisting

console.log(numProducts); // undefined

if (!numProducts) deleteShoppingCart(); // All products deleted

var numProducts = 7;

function deleteShoppingCart() {
  console.log("All products deleted");
}

// Practice Example2 - Hoisting
var x = 1; // var will create a property on the global window object, hence it is true
let y = 2; // let will not create a property on the global window object, hence it is false
const z = 3; // const will not create a property on the global window object, hence it is false

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
