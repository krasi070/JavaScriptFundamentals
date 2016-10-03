function diagonalSums(matrix) {
    matrix = matrix.map(row => row.split(' ').map(Number));
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        firstDiagonalSum += matrix[i][i];
        secondDiagonalSum += matrix[i][matrix[i].length - i - 1];
    }

    console.log(`${firstDiagonalSum} ${secondDiagonalSum}`);
}