function calculateFactorial(num) {
    if (num < 0) {
        throw new Error("Факториал для отрицательных чисел не определен.");
    }
    if (num === 0 || num === 1) {
        return 1; // Факториал 0 и 1 равен 1
    }
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
module.exports = calculateFactorial;