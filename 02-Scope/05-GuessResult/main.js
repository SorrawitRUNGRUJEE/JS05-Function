let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // * => Hello everybody => message use the variable within the scope of the function 
}

logMessage(message);
console.log(message); // ** => welcome to Thailand => message variable is in the global and in the global scope message = Welcome to Thailand
// 
// ```
// 
// ```js
let name = "John";

function sayHi(input) {
  console.log(name); // *** = >name has not been received in this line of the function, would result in error if declared a function, but return as undefined
  name = input;
}

sayHi();
console.log(name); // **** => return john because this variable is in global scope
// ```