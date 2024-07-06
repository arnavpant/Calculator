let lastResult = '';

function clearDisplay() {
    document.getElementById('userDisplay').value = '';
    document.getElementById('calcDisplay').value = '';
}

function appendToDisplay(userValue, calcValue) {
    var userDisplay = document.getElementById('userDisplay');
    var calcDisplay = document.getElementById('calcDisplay');
    userDisplay.value += userValue;
    calcDisplay.value += calcValue;
}

function calculate() {
    var userDisplay = document.getElementById('userDisplay');
    var calcDisplay = document.getElementById('calcDisplay');
    try {
        // Convert degrees to radians for trigonometric functions
        const expr = calcDisplay.value.replace(/(sin|cos|tan)\(/g, '$1(math.unit(');
        userDisplay.value = math.evaluate(expr);
        lastResult = userDisplay.value;
    } catch (e) {
        userDisplay.value = 'Error';
    }
}

function saveLastAnswerValue() {
    var userDisplay = document.getElementById('userDisplay');
    var calcDisplay = document.getElementById('calcDisplay');
    userDisplay.value += lastResult;
    calcDisplay.value += lastResult;
}
