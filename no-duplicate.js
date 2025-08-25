const biriyaniKhor = ['abul','babul','kabul','abul','babul']
const numbers =[1,3,2,1,5,4,5,6,7,7,6,8]

function noDuplicate(array){
    // console.log(array);
    const unique =[];
    for (const item of array){
        if(unique.includes(item)===false){
            unique.push(item)
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(biriyaniKhor)
console.log(uniqueArray)