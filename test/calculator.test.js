const calculator = require('../src/calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('subtract 2 from 5 to equal 3', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
})