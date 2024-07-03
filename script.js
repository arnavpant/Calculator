function clearDisplay() {
    document.getElementById('display').value = '';
}

let lastResult = '';
function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = math.evaluate(display.value);
        lastResult = display.value;
    } catch (e) {
        display.value = 'Error';
    }
}

function saveLastAnswerValue() {
    var display = document.getElementById('display');
    display.value += lastResult;
}
