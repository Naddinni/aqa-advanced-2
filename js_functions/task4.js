function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Помилка: Один або обидва аргументи не є числами");
    }

    if (denominator === 0) {
        throw new Error("Помилка: Ділення на нуль");
    }

    const result = numerator / denominator;
    return result;
}

try {
    const result1 = divide(10, 2);
    console.log("Результат 1:", result1);

    const result2 = divide(5, 0); // Викликає помилку ділення на нуль
    console.log("Результат 2:", result2);

    const result3 = divide("abc", 2); // Викликає помилку типу
    console.log("Результат 3:", result3);
} catch (e) {
    console.error("Виникла загальна помилка:", e.message);
} finally {
    console.log("Робота завершена");
}