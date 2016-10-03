function orbit([dimensions, starCoordinates]) {
    let [rows, cols] = dimensions.split(' ').map(Number);
    let [starRow, starCol] = starCoordinates.split(' ').map(Number);
    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0;
        }
    }

    matrix[starRow][starCol] = 1;
    let queue = [];
    queue.push(`${starRow} ${starCol} ${matrix[starRow][starCol]}`);
    while (queue.length > 0) {
        let [row, col, value] = queue.shift().split(' ').map(Number);

        if (row > 0 && matrix[row - 1][col] == 0) {
            queue.push(`${row - 1} ${col} ${value + 1}`);
            matrix[row - 1][col] = value + 1;
        }

        if (row > 0 && col < cols - 1 && matrix[row - 1][col + 1] == 0) {
            queue.push(`${row - 1} ${col + 1} ${value + 1}`);
            matrix[row - 1][col + 1] = value + 1;
        }

        if (col < cols - 1 && matrix[row][col + 1] == 0) {
            queue.push(`${row} ${col + 1} ${value + 1}`);
            matrix[row][col + 1] = value + 1;
        }

        if (row < rows - 1 && col < cols - 1 && matrix[row + 1][col + 1] == 0) {
            queue.push(`${row + 1} ${col + 1} ${value + 1}`);
            matrix[row + 1][col + 1] = value + 1;
        }

        if (row < rows - 1 && matrix[row + 1][col] == 0) {
            queue.push(`${row + 1} ${col} ${value + 1}`);
            matrix[row + 1][col] = value + 1;
        }

        if (row < rows - 1 && col > 0 && matrix[row + 1][col - 1] == 0) {
            queue.push(`${row + 1} ${col - 1} ${value + 1}`);
            matrix[row + 1][col - 1] = value + 1;
        }

        if (col > 0 && matrix[row][col - 1] == 0) {
            queue.push(`${row} ${col - 1} ${value + 1}`);
            matrix[row][col - 1] = value + 1;
        }

        if (row > 0 && col > 0 && matrix[row - 1][col - 1] == 0) {
            queue.push(`${row - 1} ${col - 1} ${value + 1}`);
            matrix[row - 1][col - 1] = value + 1;
        }
    }

    for (let row = 0; row < rows; row++) {
        console.log(matrix[row].join(' '));
    }
}