It involves breaking down a function that takes multiple arguments into
a series of functions that take one argument each.

Simple words:- This creates a chain of functions, where each function
returns another function until the final result is achieved.

  function sum (a){
    return function(b){
        return function (c){
            return a+b+c;
        }
    }
}

console.log(sum(1)(2)(3));

const logger = (name)=>( age)=>( DOB) =>` my ${name} I am  ${age} year old and ${DOB}`;

const a=logger("sahil")
const b=a(24);
const c= b(2001);
console.log(c)
