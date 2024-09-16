// printPrime
// ให้สร้างฟังก์ชันรับรับพารามิเตอร์เป็นตัวเลข
// แสดง Prime number ทั้งหมด โดยแสดงตั้งแต่ 2 ถึงตัวเลขที่รับมาเป็นพารามิเตอร์

function printPrime(limit){
    for(i = 2; i <= limit; i++){
        isPrime(i)
        // console.log(i)
            
        }
    }
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


    // function isPrime(inputNumber){
       
//         let primeNumber = true
//         for(i =2; i < inputNumber; i++ ){
//             if(inputNumber % i == 0)primeNumber = false
//         }
//         if(primeNumber) {
           
//             console.log(inputNumber)
//         }
      
    
//     }
