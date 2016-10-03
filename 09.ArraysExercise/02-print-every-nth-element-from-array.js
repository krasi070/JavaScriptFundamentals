function printEveryNthElementFromArray(input) {
    let step = Number(input[input.length - 1]);
    let arr = input
        .slice(0, input.length - 1)
        .filter((n, i) => i % step == 0);

    console.log(arr.join('\n'));
}