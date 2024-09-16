// - ให้สร้างฟังก์ชัน max ซึ่งจะคืนค่าพารามิเตอร์ที่มีค่ามากที่สุด
// - พารามิเตอร์มีได้มากสุด 4 ตัว
// - หากใน argument ของฟังก์ชันมีค่าที่ไม่ใช่ตัวเลข ให้คืนค่าเป็น NaN
// - เมื่อเรียกใช้งานฟังก์ชันต้องได้ผลลัพธ์ ดังนี้
// max(); // undefined
// max(2); // 2
// max(3, 1); // 3
// max(7, 3, 9, 2); // 9

function max(num1, num2, num3, num4) {
    checkNum1 = typeof (num1)
    checkNum2 = typeof (num2)
    checkNum3 = typeof (num3)
    checkNum4 = typeof (num4)


    if (checkNum1 == "number" && checkNum2 == "undefined" && checkNum3 == "undefined" && checkNum4 == "undefined") {
        return num1
    }
    else if (checkNum1 == "number" && checkNum2 == "number" && checkNum3 == "undefined" && checkNum4 == "undefined") {
        console.log("here")
        return num1 > num2 ? num1 : num2
    }
    else if (checkNum1 == "number" && checkNum2 == "number" && checkNum3 == "number" && checkNum4 == "undefined") {
        return (num1 > num2 && num1 > num3) ? num1 
        : (num2 > num1 && num2 > num3) ? num2 
        : num3
    }
    else if (checkNum1 == "number" && checkNum2 == "number" && checkNum3 == "number" && checkNum4 == "number") {
        return (num1 > num2 && num1 > num3 && num1 > num4) ? num1 
        : (num2 > num1 && num2 > num3 && num2 > num4) ? num2 
        : (num3 > num1 && num3 > num2 && num3 > num4) ? num3
        : num4 
    }
    else return NaN
}