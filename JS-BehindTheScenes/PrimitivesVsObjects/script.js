"use strict";
// PRIMITIVE TYPES::::::::
// This piece of code works intuitively the way it should work,
// its' bcuz each primitive value is saved into its own piece of memory in the stack.
let firstName = "Shash";
let oldFirstName = firstName;
firstName = "ShashWebdev";
console.log(firstName, oldFirstName); // ShashWebdev Shash

// REFERENCE TYPES:::::::::
// Let's examine the same scenario in object creation
// the reference value here is stored in the heap and the stack then just keeps a reference to the
// memory position at which the object is stored in the heap.
const jhany = {
  firstName: "Jhany",
  lastName: "Vany",
  age: 30,
};

const marriedJhany = jhany; // Copied the original object as a reference value
marriedJhany.lastName = "Rany"; // changed the lastname of the newly created object
console.log("Before Marriage", jhany); // Before Marriage {firstName: "Jhany", lastName: "Rany", age: 30}
console.log("After Marriage", marriedJhany); // After Marriage {firstName: "Jhany", lastName: "Rany", age: 30}

// COPYING OBJECTS::::::::
const jhany2 = {
  firstName: "Jhany",
  lastName: "Vany",
  age: 30,
  family: ["Rosy", "Romy"],
};

const jhanyCopy = Object.assign({}, jhany2);
jhanyCopy.lastName = "Rany";

jhanyCopy.family.push("Chaks");
jhanyCopy.family.push("Chuks");

console.log("Before Marriage", jhany2); // Before Marriage {firstName: "Jhany", lastName: "Vany", age: 30, Array(4)}
console.log("After Marriage", jhanyCopy); // After Marriage {firstName: "Jhany", lastName: "Rany", age: 30, Array(4)}
