const today = new Date();
const date = new Date('2062-10-23')
// console.log(date.getMonth());
const specificDate = new Date(2091,0,26);
specificDate.setMonth(11)
console.log(specificDate)
console.log(specificDate.toString());
console.log(specificDate.toLocaleString('en-GB'));
console.log(specificDate.toDateString());

//convert date into second ,its called unix epoc