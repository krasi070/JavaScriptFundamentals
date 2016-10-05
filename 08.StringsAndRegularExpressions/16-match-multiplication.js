function matchMultiplication([text]) {
    text = text.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
        (match, num1, num2) => num1 * num2);
    console.log(text);
}