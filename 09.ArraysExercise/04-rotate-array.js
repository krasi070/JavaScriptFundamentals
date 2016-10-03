function rotateArray(input) {
    let arr = input.slice(0, input.length - 1);
    let numberOfRotations = arr.length - (input[input.length - 1] % arr.length);

    for (let i = 0; i < numberOfRotations; i++) {
        let currElement = arr.shift();
        arr.push(currElement);
    }

    console.log(arr.join(' '));
}