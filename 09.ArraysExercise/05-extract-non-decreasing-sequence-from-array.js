function extractNonDecreasingSequenceFromArray(arr) {
    arr = arr.map(Number);
    let max = arr[0];
    arr = arr.filter(n => {
        max = Math.max(max, n);
        return max <= n;
    });

    console.log(arr.join('\n'));
}