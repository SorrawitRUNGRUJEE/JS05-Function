// - ให้สร้างฟังก์ชัน login ที่มีพารามิเตอร์ 2 ตัว คือ username และ password
// - ถ้า username = “admin” และ password = “P@ssw0rd” แสดงว่า login สำเร็จ แต่ถ้าไม่ใช่แสดงว่าไม่สำเร็จ


let Username
let password

function login(Username, password){
    if(Username == "admin" && password == "p@ssw0rd") alert("log in sucess!")
    else alert("log in fail...")


}