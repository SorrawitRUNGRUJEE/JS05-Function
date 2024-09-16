// isPrime ?
// จำนวนเฉพาะ (Prime Number) คือจำนวนเต็มบวกที่มากกว่า 1
// และมีตัวหารลงตัวที่เป็นจำนวนเต็มบวกอยู่แค่ 2 ตัวก็คือ 1 และตัวมันเอง

// เช่น
// เลข 17 เป็นจำนวนเฉพาะ เพราะมีแค่ 1 และ 17 เท่านั้นที่สามารถหารเลข 17 ลงตัว
// เลข 23 เป็นจำนวนเฉพาะ เพราะมีแค่ 1 และ 23 เท่านั้นที่สามารถหารเลข 23 ลงตัว
// เลข 24 ไม่เป็นจำนวนเฉพาะ เพราะมี 1,2,4,6,8,12,24 ที่สามารถหารเลข 24 ลงตัว

// TASK : ให้สร้างฟังก์ชันตรวจสอบตัวเลข ว่าเลขนั้นเป็นจำนวนเฉพาะหรือไม่

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