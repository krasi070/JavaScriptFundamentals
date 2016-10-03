function lastKNumbers([arrLength, k]) {
    [arrLength, k] = [arrLength, k].map(Number);
    let arr = [];
    arr[0] = 1;
    for (let i = 1; i < arrLength; i++) {
        arr[i] = arr.slice(Math.max(0, i - k), i).reduce((a, b) => a + b);
    }

    console.log(arr.join(' '));
}