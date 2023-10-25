function divide(numerator, denominator) {
    try {
        if (denominator === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        if (typeof denominator !== "number") {
            throw new Error("Denominator must be a number");
        }
        if (typeof numerator !== "number") {
            throw new Error("Numerator must be a number");
        }
        return numerator / denominator;
    } catch (error) {
        console.error("An error occurred:", error.message);
        return null;
    } finally {
        console.log("Operation completed.");
    }
}

console.log(divide(10, 'string'));
console.log(`----------------`)
console.log(divide(10, 0));
console.log(`----------------`)
console.log(divide(50, 5));