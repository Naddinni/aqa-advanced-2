const isPersonAdult = (age) => {
if (age >= 18) {
        return true;
    } else if (age < 18) {
        return false;
    } else {
        return errorMessage;
    }
}

const errorMessage = 'It`s not a number'
console.log(isPersonAdult(25))
console.log(isPersonAdult(15))
console.log(isPersonAdult('string'))
