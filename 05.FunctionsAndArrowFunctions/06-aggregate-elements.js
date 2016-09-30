function aggregateElements(arr) {
    arr = arr.map(Number);
    aggregate(arr, 0, (a, b) => a + b);
    aggregate(arr, 0, (a, b) => a + 1 / b);
    aggregate(arr, "", (a, b) => a + b);

    function aggregate(arr, start, operation) {
        let result = start;
        for (let i = 0; i < arr.length; i++) {
            result = operation(result, arr[i]);
        }

        console.log(result);
    }
}