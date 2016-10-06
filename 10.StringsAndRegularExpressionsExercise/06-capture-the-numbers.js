function captureTheNumbers(input) {
    let numbers = [];
    for (let line of input) {
        let match = line.match(/\d+/g);
        if (match) {
            for (let num of match) {
                numbers.push(num);
            }
        }
    }

    console.log(numbers.join(' '));
}