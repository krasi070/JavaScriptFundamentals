function processOddNumbers(arr) {
    let result = '';
    arr = arr
        .map(Number)
        .filter((n, i) => i % 2 != 0)
        .reverse()
        .forEach(n => result += (n * 2) + ' ');

    console.log(result);
}