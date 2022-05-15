import { it, expect } from 'vitest';
import { add } from './math';

it('should summarize all numbers values in an array', () => {
    // Arrange
    const numbers = [1, 2, 3];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((acc, cur) => acc + cur, 0);
    expect(result).toBe(expectedResult);
});

it('should return NaN if a least one invalid  number is provided', () => {
    const inputs = ['NaN', 1];
    const result = add(inputs);

    expect(result).toBeNaN();
});

it('should throw an error if no value is passed into the function', () => {
    const resultFn = () => {
        add();
    };

    expect(resultFn).toThrow();
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
    const num1 = 1;
    const num2 = 2;

    const resultFn = () => {
        add(num1, num2);
    };

    expect(resultFn).toThrow(/is not iterable/);
});
