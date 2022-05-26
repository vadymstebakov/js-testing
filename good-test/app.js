import { extractEnteredNumberValues } from './src/parser.js';
import { getFormResult } from './src/getFormResult';
import { getFormTextResult } from './src/getFormTextResult';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
    event.preventDefault();
    const numberInputs = extractEnteredNumberValues(form);
    const result = getFormResult(numberInputs);
    const resultText = getFormTextResult(result);

    output.textContent = resultText;
}

form.addEventListener('submit', formSubmitHandler);
