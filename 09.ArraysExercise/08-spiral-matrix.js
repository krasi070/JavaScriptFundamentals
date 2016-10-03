function spiralMatrix([dimensions]) {
    let [rows, cols] = dimensions.split(' ').map(Number);
    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0;
        }
    }

    let value = 1;
    let direction = 'right';
    let currRow = 0;
    let currCol = 0;
    while (value < rows * cols) {
        matrix[currRow][currCol] = value;

        switch (direction) {
            case 'right':
                if (currCol + 1 < cols && matrix[currRow][currCol + 1] == 0) {
                    currCol++;
                    value++;
                } else {
                    direction = 'down';
                }
                break;
            case 'left':
                if (currCol > 0 && matrix[currRow][currCol - 1] == 0) {
                    currCol--;
                    value++;
                } else {
                    direction = 'up';
                }
                break;
            case 'up':
                if (currRow > 0 && matrix[currRow - 1][currCol] == 0) {
                    currRow--;
                    value++;
                } else {
                    direction = 'right';
                }
                break;
            case 'down':
                if (currRow + 1 < rows && matrix[currRow + 1][currCol] == 0) {
                    currRow++;
                    value++;
                } else {
                    direction = 'left';
                }
                break;
        }
    }

    matrix[currRow][currCol] = value;
    for (let row = 0; row < rows; row++) {
        console.log(matrix[row].join(' '));
    }
}

spiralMatrix(['3 3']);