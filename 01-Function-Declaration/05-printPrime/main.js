function printPrime(limit){
    for(i =2; i <= limit; i++){
        isPrime(i)
        // console.log(i)
            
        }
    }

// function isPrime(inputNumber){
       
//         let primeNumber = true
//         for(i =2; i < inputNumber; i++ ){
//             if(inputNumber % i == 0)primeNumber = false
//         }
//         if(primeNumber) {
           
//             console.log(inputNumber)
//         }
      
    
//     }


function isPrime(inputNumber){
   
        let primeNumber = true
        for(i =2; i < inputNumber; i++ ){
            if(inputNumber % i == 0){
                primeNumber = false
                continue;
            }
        }

        if(primeNumber)console.log(inputNumber)
    }
