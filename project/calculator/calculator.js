function calculate(op) {
    let num1 = +document.getElementById('input1').value;
    let num2 = +document.getElementById('input2').value;
    let result;
    if(op === '+') result = num1 + num2;
    if(op === '-') result = num1 - num2;
    if(op === '*') result = num1 * num2;
    if(op === '/') result = num2 !== 0 ? num1 / num2 : 'Error (divide by 0)';
    document.getElementById('result').innerText = 'Result: ' + result;
}