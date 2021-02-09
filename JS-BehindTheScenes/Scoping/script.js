// 'use strict';

function calcAge(birthYear) {
    const age = 2050 - birthYear;
   // console.log(firstName); // Shash 
   
   // function within the function to see how the scope works
   function printAge() {
       // age and birthYear variables were accessed from the outer scope calcAge function, 
       // whereas firstName was accessed from globally defined variable
       const output = `${firstName}, You are ${age}, born in ${birthYear}.`;
       console.log(output); // Shash, You are 66, born in 1984.

       // Experimenting with block level scoping 
       if(birthYear >= 1981 && birthYear <= 1996) {
           // firstName was accessed from globally defined variable
           // const and let are block scoped variables and cannot be accessed outside block scope
        const millenial = `${firstName}, You are a Millenial!.`;
        console.log(millenial); // Shash, You are a Millenial!.
        // if we declare it with var keyword, it can be accessed outside block scope bcuz var is function scoped variable
        var millenial2 = true; 

        // Experimenting with function inside block scope
        function add(a, b) {
            return a + b;
        }
       }
      // console.log(millenial); // throws a reference error
      console.log(millenial2); // true
      console.log(add(2, 3)); // Throws a reference error bcuz this program runs on strict mode but if we remove it, we will get the output 5

   }
        printAge(); 
    
   return age;
}

const firstName = "Shash"; 
//console.log(calcAge(1984)); // 66
calcAge(1984);

