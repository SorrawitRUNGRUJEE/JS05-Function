// arrow syntax, the new anonymous function

// first type
let a = function (x) {return x ** 2}
let b = (x) => x **2
let c = (x,y) => x + y
let e = x => x + 2

// sceond type
// if there is a bracket , dont forget to return the value
let d = (x,y) => {
    let sum = x + y
    return sum
}

console.log(a(3))
console.log(b(3))
console.log(c("a","b"))
console.log(d("x", "y"))