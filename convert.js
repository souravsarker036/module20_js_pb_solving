function inchToFeet(inch){
    const feet = inch /12;
    return feet
}

function inchToFeet2(inch){
    const feetFraction = inch /12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch'
    return result;
}

const myHeight = inchToFeet(75);
// console.log(myHeight)
const myHeight2 = inchToFeet2(75);
// console.log(myHeight2)

function mileToKm(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const result = mileToKm(10);
console.log(result)