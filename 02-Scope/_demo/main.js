// console.log(`scope`)

// let message = `hi`

// function sayHi(){
// // function scope
// let message = `hello`
// console.log(`what ${message}`)
// }

// sayHi();

// console.log(message);

// rule of indentifier
// each variable name within the same scope must be unique

// let message = `h`;
// let message =`i`

// const num = 5
// const num = 10

// var a = 5
// var a = 10

function sayHi(){
    console.log(`i`)
}

{
    let message = `hello`
    console.log(message)
}

{
    let message = `good bye`
    console.log(message)
}

//if two variable within same scope with the declaration of the same name will lead to error  
// reassigning is possible
// rule of identify is not applicable with var
// 
// 
// 
// 
// 


// Rule of Access 
//  the global variable cant access local variable
// the global variable can be access by local 
// reference error --> cannot fint the variable within the same scope
// any global variable should be assign with const to avoid reassign
// assign variable via 