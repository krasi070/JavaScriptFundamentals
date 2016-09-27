function stringOfNumbers([count]) {
    let result = "";
    for (let i = 1; i <= count; i++) {
        result += "" + i;
    }

    return result;
}