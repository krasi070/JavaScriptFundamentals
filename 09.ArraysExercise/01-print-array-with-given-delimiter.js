function printArrayWithGivenDelimiter(input) {
    let delimiter = input[input.length - 1];
    let arr = input.slice(0, input.length - 1);
    console.log(arr.join(delimiter));
}