An IIFE is a function that is called immediately after it is defined.
Use cases of IIFE:-
-> Avoid polluting the global namespace.
-> Execute async/await functions.
-> Provides encapsulation, allowing you to create private scopes for variables and functions.

function pr (){
    console.log("hello");
    }
(
 async()=>{
  await pr() 
  }   
)()
