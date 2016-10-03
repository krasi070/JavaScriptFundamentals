function smallestTwoNumbers(arr) {
    arr = arr
        .map(Number)
        .sort((a, b) => a - b)
        .slice(0, Math.min(2, arr.length));

    console.log(arr.join(' '));
}