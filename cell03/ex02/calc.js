function changetext(text) {
    document.getElementById("operator").innerText = text;
}

function calculate() {
    const right = parseFloat(document.getElementById('right').value);
    const left = parseFloat(document.getElementById('left').value);
    const operator = document.getElementById('operator').innerText;
    let result;

    if (right < 0 || left < 0) {
        alert("Error :(");
        console.log("Error: Negative values are not allowed.");
        return;
    }

    switch (operator) {
        case '*':
            result = right * left;
            break;
        case '/':
            if (left === 0) {
                alert("It’s over 9000!");
                console.log("Error: Division by zero.");
                return;
            }
            result = right / left;
            break;
        case '+':
            result = right + left;
            break;
        case '-':
            result = right - left;
            break;
        case '%':
            if (left === 0) {
                alert("It’s over 9000!");
                console.log("Error: Modulo by zero.");
                return;
            }
            result = right % left;
            break;
        default:
            result = 'Invalid operator';
            console.log("Error: Invalid operator.");
            return;
    }

    alert('Result: ' + result);
    console.log('Result: ' + result);
}

document.getElementById('operator').addEventListener('click', function() {
    changetext('New Text');
});

setInterval(function() {
    alert('Please, use me...');
}, 30000);