const errorMessage = 'It`s not a number'
const isPersonAdult = (age) => {
if (age >= 18) {
        return true;
    } else if (age < 18) {
        return false;
    } else {
        return errorMessage;
    }
}


console.log(isPersonAdult(25))
console.log(isPersonAdult(15))
console.log(isPersonAdult('string'))


// shorter
const isAdult = (age) => age >=18
console.log(isAdult(25))
console.log(isAdult(15))
console.log(isAdult('string'))