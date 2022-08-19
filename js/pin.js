function getFourDigitPin() {
    const pin = Math.round(generatePin()) + '';

    if (pin.length === 4) {
        return pin;
    } else {
        return getFourDigitPin();
    }
}


function generatePin() {
    const pin = Math.random() * 10000;
    return pin;
}
document.getElementById('pin-button').addEventListener('click', function () {
    const pin = getFourDigitPin();
    const pinField = document.getElementById('pin-field');
    pinField.value = pin;
});


document.getElementById('calculator').addEventListener('click', function (event) {
    const calculatorField = document.getElementById('calculator-field');
    const prevNumber = calculatorField.value;
    const number = event.target.innerText;
    const newNumber = prevNumber + number;

    if (isNaN(number)) {

        if (number === 'C') {
            calculatorField.value = '';

        } else if (number === '<') {

            const numberSplit = newNumber.split('');
            numberSplit.pop();
            numberSplit.pop();
            const updateValue = numberSplit.join('');
            calculatorField.value = updateValue;

        }
    } else {
        calculatorField.value = newNumber;
    }
});


document.getElementById('submit').addEventListener('click', function () {
    const pinField = document.getElementById('pin-field');
    const pinValue = pinField.value;
    const calculatorField = document.getElementById('calculator-field');
    const calculatorPin = calculatorField.value;

    const successMessage = document.getElementById('match');
    const errorMessage = document.getElementById('not-match');

    if (pinValue === calculatorPin) {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
    } else {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
});


