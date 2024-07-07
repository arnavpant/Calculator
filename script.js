let history = [];

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
}

function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.innerText += value;
}

function calculateResult() {
    let display = document.getElementById('display');
    let expression = display.innerText;
    try {
        let result = eval(expression.replace(/π/g, 'Math.PI').replace(/sqrt/g, 'Math.sqrt').replace(/log/g, 'Math.log10').replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan').replace(/abs/g, 'Math.abs').replace(/!/g, 'factorial'));
        display.innerText = result;
        history.push({ expression: expression, result: result });
    } catch (error) {
        display.innerText = 'Error';
    }
}

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function showHistory() {
    let historyPage = document.getElementById('historyPage');
    let calculatorPage = document.getElementById('calculatorPage');
    historyPage.style.display = 'block';
    calculatorPage.style.display = 'none';

    let historyDiv = document.getElementById('history');
    historyDiv.innerHTML = '';
    history.forEach(entry => {
        let p = document.createElement('p');
        p.innerText = `${entry.expression} = ${entry.result}`;
        historyDiv.appendChild(p);
    });
}

function showCalculator() {
    let historyPage = document.getElementById('historyPage');
    let calculatorPage = document.getElementById('calculatorPage');
    historyPage.style.display = 'none';
    calculatorPage.style.display = 'block';
}
