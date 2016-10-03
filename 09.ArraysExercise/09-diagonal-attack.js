function diagonalAttack(matrix) {
    matrix = matrix.map(row => row.split(' ').map(Number));
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        firstDiagonalSum += matrix[i][i];
        secondDiagonalSum += matrix[i][matrix[i].length - i - 1];
    }

    if (firstDiagonalSum == secondDiagonalSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row != col && col != matrix[row].length - row - 1) {
                    matrix[row][col] = firstDiagonalSum;
                }
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '));
    }
}