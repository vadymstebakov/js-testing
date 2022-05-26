import { validateStringNotEmpty, validateNumber } from './util/validation.js';
import { add } from './math.js';
import { transformToNumber } from './util/numbers.js';

export const getFormResult = numberInputs => {
    let result = '';

    try {
        const numbers = [];
        for (const numberInput of numberInputs) {
            validateStringNotEmpty(numberInput);
            const number = transformToNumber(numberInput);
            validateNumber(number);
            numbers.push(number);
        }
        result = add(numbers).toString();
    } catch (error) {
        result = error.message;
    }

    return result;
};
