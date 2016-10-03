function magicMatrices(matrix) {
    matrix = matrix.map(row => row.split(' ').map(Number));
    let sum = matrix[0].reduce((a, b) => a + b);
    for (let col = 0; col < matrix[0].length; col++) {
        if (matrix[col].reduce((a, b) => a + b) != sum) {
            return false;
        }

        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }

        if (colSum != sum) {
            return false;
        }
    }

    return true;
}