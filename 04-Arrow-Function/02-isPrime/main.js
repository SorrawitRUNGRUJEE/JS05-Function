let isPrime = (x) => {
    
        let isPrime = true
        
        for(i = 2; i < x; i++){
            if(x % i == 0) isPrime = false;
        }
        if(isPrime)console.log(`${x} is a prime number`)
        else console.log(`${x} is not a prime number`)
    }
   



