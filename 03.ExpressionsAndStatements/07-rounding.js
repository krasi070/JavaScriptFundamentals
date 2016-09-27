function rounding(input) {
    let [fraction, precision] = input.map(Number);
    if (precision > 15) {
        precision = 15;
    }

    console.log(parseFloat(fraction.toFixed(precision)));
}