"use strict";

/**
 * * Scenario: "this" keyword in the global scope is simply a window object
 */
console.log(this); // Window
//alert(this); // [object window]

/**
 * * Scenario: Checking the status of "this" inside a regular function expression
 */
const calAge = function (birthYear) {
  console.log(2050 - birthYear); // 29
  console.log(this); // undefined
};
console.log(calAge(2021)); // undefined

/**
 * * Scenario: Checking the status of "this" inside an arrow function
 */

const calAgeArrow = (birthYear) => {
  console.log(2050 - birthYear); // 29
  console.log(this); // window
  /**
   * * arrow function does not get its own "this" keyword, instead arrow function simply uses the
   * * lexical "this" keyword which means that it uses the "this" keyword of its parent function or of its parent scope
   * * here, lexical "this" keyword means "window object"
   */
};
console.log(calAgeArrow(2021)); // undefined

/**
 * * Scenario: Checking the status of "this" inside a method
 */

const Shash = {
  year: 2021,
  calAge: function () {
    console.log(this); // {year: 2021, calAge: ƒ}
    // here "this" keyword refers to an Object(Shash) that is calling the method
    console.log(2050 - this.year); // 29
  },
};
console.log(Shash.calAge()); // undefined

/**
 * * Method Borrowing
 */
const Jhan = {
  year: 1990,
};

Jhan.calAge = Shash.calAge;
console.log(Jhan.calAge()); // undefined

const f = Shash.calAge;
f(); // Uncaught TypeError: Cannot read property 'year' of undefined
