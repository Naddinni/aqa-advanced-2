//Loop for
console.log(`-----Loop for-----`)

const numbers = [2, -5, 0, 7, -3, 0, 10, -8]
let positiveCount = 0
let negativeCount = 0
let zeroCount = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveCount++;
    } else if (numbers[i] < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }
}

console.log(`The number of  positive numbers is ${positiveCount}`)
console.log(`The number of  negative numbers is ${negativeCount}`)
console.log(`The number of  zeroes is ${zeroCount}`)

//Loop for...of
console.log(`-----Loop for...of-----`)

const numbers1 = [2, -5, 0, 7, -3, 0, 10, -8]
let positiveCount1 = 0
let negativeCount1 = 0
let zeroCount1 = 0

for (const number of numbers1) {
    if (number > 0) {
        positiveCount1++;
    } else if (number < 0) {
        negativeCount1++;
    } else {
        zeroCount1++;
    }
}

console.log(`The number of  positive numbers is ${positiveCount1}`)
console.log(`The number of  negative numbers is ${negativeCount1}`)
console.log(`The number of  zeroes is ${zeroCount1}`)

