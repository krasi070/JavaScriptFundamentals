function biggestElement(matrix) {
    matrix = matrix.map(row => row.split(' ').map(Number));
    let max = matrix[0][0];
    matrix.forEach(r => r.forEach(n => max = Math.max(n, max)));
    console.log(max);
}