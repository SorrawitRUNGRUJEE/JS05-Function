// ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)  
// ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020

function countDay(yearInput) {
    let leapYear = 0
    let notLeapYear = -1
    for (let i = yearInput; i <= 2020; i++) {
        notLeapYear++
        if (isLeapYear(i)){
            leapYear++
            notLeapYear--
            }
        console.log(i, leapYear, notLeapYear)
    }
    totalDay = (notLeapYear * 365) + (leapYear * 366)

    return `you are ${totalDay} day old`
}


// function countDay(yearInput) {
//     let leapYear = 0
//     let year = -1
//     for (let i = yearInput; i <= 2020; i++) {
//         year++
//         if (isLeapYear(i))leapYear++
//         console.log(i,year,leapYear)
//     }
//     totalDay = ((year - leapYear) * 365) + (leapYear * 366)

//     return totalDay
// }

let isLeapYear = (x) => {
    if (x % 100 == 0) {
        if (x % 400 == 0) {
            return true
        }
        else return false
    }
    else if (x % 4 == 0) return true
    else return false
}