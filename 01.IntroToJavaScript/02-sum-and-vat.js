function calcSumAndVat(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
    }

    let vat = sum * 0.20;
    let total = sum * 1.20;
    let result = `sum = ${sum}\nVAT = ${vat}\ntotal = ${total}\n`;

    return result;
}