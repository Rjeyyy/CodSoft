let result = document.getElementById('result');
let expression = '';

function clearScreen() {
    expression = '';
    updateScreen();
}

function append(value) {
    expression += value;
    updateScreen();
}

function calculate() {
    try {
        const resultValue = eval(expression);
        expression = resultValue.toString();
        updateScreen();
    } catch (error) {
        expression = 'Error';
        updateScreen();
    }
}

function updateScreen() {
    result.textContent = expression;
}