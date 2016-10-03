function addAndRemoveElementsFromArray(commands) {
    let value = 1;
    let arr = [];
    let arrLength = 0;
    for (let command of commands) {
        if (command == 'add') {
            arr[arrLength] = value;
            arrLength++;
        } else {
            arrLength = Math.max(0, arrLength - 1);
        }

        value++;
    }

    let result = arr.slice(0, arrLength);
    console.log(result.length == 0 ? "Empty" : result.join('\n'));
}