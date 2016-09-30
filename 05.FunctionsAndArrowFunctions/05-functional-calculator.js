function functionalCalculator([a, b, operator]) {
    [a, b] = [a, b].map(Number);
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    switch (operator) {
        case "+":
            return executeOperation(a, b, add);
        case "-":
            return executeOperation(a, b, subtract);
        case "*":
            return executeOperation(a, b, multiply);
        case "/":
            return executeOperation(a, b, divide);
    }

    function executeOperation(a, b, operation) {
        return operation(a, b);
    }
}