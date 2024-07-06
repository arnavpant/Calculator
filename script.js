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
        userDisplay.value = math.evaluate(calcDisplay.value);
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
