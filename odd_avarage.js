function oddAvarage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number %2 !== 0){
            // console.log(number)
            odds.push(number)
        }
    }
    let sum = 0;
    for (const number of odds){
        sum= sum + number;
    }
    const count = odds.length;
    // console.log(sum, count);
    const avg = sum / count;
    return avg;
}
const numbers =[13,14,42,45,47,48,61]
const avg = oddAvarage(numbers);
console.log('avarage is:', avg)