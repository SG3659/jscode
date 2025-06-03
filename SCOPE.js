The scope is the current context of execution in which values and expressions are
"visible".
JavaScript variables have 3 types of scope:
Block scope:- Variables declared inside a { } block cannot be accessed from outside
the block. let and const have block scope.

Function scope:- Variables defined inside a function are not accessible (visible) from
outside the function. let, const and var have function scope.

Global scope:- Variables declared Globally (outside any function) have Global Scope.
let, const and var have global scope.


let:
  1. let creates a block scope 
  2. re-declearation is not allowed
  3. re-assignment is not allowed
var: 
  1.only had a function scope
  2.var are hoisted and they can be used before decleration
const:
  1. create block scope 
  2. reassignment and re-decleration is not allowed 
