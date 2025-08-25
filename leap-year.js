// function isLeapYear(year){
//     if(year %4 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
    
// const isLipi = isLeapYear(2024);
// console.log(isLipi)

function isLeapYear2(year){
    if(year %100 !== 0 && year %4 === 0){
        return true;
    }
    else if(year %100 === 0 && year %400 === 0){
        return true;
    }
    else{
        return false;
    }
}

const isLipi2 = isLeapYear2(2100);
console.log(isLipi2)