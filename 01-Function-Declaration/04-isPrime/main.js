function isPrime(inputNumber){
    n = inputNumber
    let primeNumber = true
    for(i =2; i < n; i++ ){
        if(n % i == 0)primeNumber = false
    }
    if(primeNumber) {
        alert("This is a prime number") 
        console.log("prime number")
    }
    else {
        alert("This is not a prime number")
        console.log("not prime number")
    }

}