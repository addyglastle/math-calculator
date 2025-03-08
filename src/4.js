const calculate = (number1, number2) => {
    switch(operator) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "*":
            return number1 * number2;
        case "/":
            if (number2 === 0) {
                alert("Cannot divide by zero");
                break;
            } else {
                return number1 / number2;
            }
    }
}
