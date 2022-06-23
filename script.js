var num1 = parseFloat(prompt('Enter the first number: '));
var num2 = parseFloat(prompt('Enter the second number:'));
var operator = prompt('What operator do you want to carry out: choose +, -, / or *');
var result;
if (operator == '+') {
    result = num1 + num2
} else if (operator == '-') {
    result = num1 - num2
} else if (operator == '/') {
    result = num1 / num2
} else if (operator == '*') {
    result = num1 * num2
} else {
    alert('Invalid entry')
};
alert(`${num1} ${operator} ${num2} = ${result}`);