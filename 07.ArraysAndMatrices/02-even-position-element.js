function evenPositionElement(arr) {
    let result = arr.filter((n, i) => i % 2 == 0);
    console.log(result.join(' '));
}