function figureOfFourSquares([n]) {
    n = Number(n);
    let height = n;
    if (n % 2 == 0) {
        height--;
    }

    let oneSquareWidth = n - 2;
    for (let i = 0; i < height; i++) {
        if (i == 0 || i == height - 1 || i == Math.floor(height / 2)) {
            console.log(`+${"-".repeat(oneSquareWidth)}+${"-".repeat(oneSquareWidth)}+`);
        } else {
            console.log(`|${" ".repeat(oneSquareWidth)}|${" ".repeat(oneSquareWidth)}|`);
        }
    }
}