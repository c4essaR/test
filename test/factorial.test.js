const { expect } = require('chai');
const calculateFactorial = require('../calculateFactorial'); // Путь к функции

describe('calculateFactorial', () => {
    it('должен возвращать 1 для факториала 0', () => {
        expect(calculateFactorial(0)).to.equal(1);
    });

    it('должен возвращать 1 для факториала 1', () => {
        expect(calculateFactorial(1)).to.equal(1);
    });

    it('должен корректно вычислять факториал положительного числа', () => {
        expect(calculateFactorial(5)).to.equal(120);
        expect(calculateFactorial(6)).to.equal(720);
    });

    it('должен выбрасывать ошибку для отрицательных чисел', () => {
        expect(() => calculateFactorial(-1)).to.throw('Факториал для отрицательных чисел не определен.');
    });
});