function binaryLogarithm(input) {
    input = input.map(Number);
    for (let i = 0; i < input.length; i++) {
        console.log(Math.log2(input[i]));
    }
}