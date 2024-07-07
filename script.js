let history = [];

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    let display = document.getElementById('display');
    let expression = display.innerText;
    try {
        let result = eval(expression.replace(/Math.PI/g, 'Math.PI').replace(/Math.sqrt/g, 'Math.sqrt').replace(/Math.log10/g, 'Math.log10').replace(/Math.sin/g, 'Math.sin').replace(/Math.cos/g, 'Math.cos').replace(/Math.tan/g, 'Math.tan').replace(/Math.abs/g, 'Math.abs').replace(/!/g, 'factorial'));
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
    historyPage.classList.add('active');
    calculatorPage.classList.remove('active');

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
    historyPage.classList.remove('active');
    calculatorPage.classList.add('active');
}
