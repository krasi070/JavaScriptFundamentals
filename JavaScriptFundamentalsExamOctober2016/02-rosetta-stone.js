function rosettaStone(input) {
    let numberOfDecodingMatrixRows = input.shift();
    let decodingMatrix = input
        .slice(0, numberOfDecodingMatrixRows)
        .map(r => r.split(' ').map(Number));
    let encodedMatrix = input
        .slice(numberOfDecodingMatrixRows)
        .map(r => r.split(' ').map(Number));
    let wheelOfLetters = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < encodedMatrix.length; i += decodingMatrix.length) {
        for (let j = 0; j < encodedMatrix[i].length; j += decodingMatrix[0].length) {
            let rowBorder = Math.min(i + decodingMatrix.length, encodedMatrix.length);
            for (let row = i; row < rowBorder; row++) {
                let colBorder = Math.min(j + decodingMatrix[0].length, encodedMatrix[row].length);
                for (let col = j; col < colBorder; col++) {
                    encodedMatrix[row][col] += decodingMatrix[row - i][col - j];
                }
            }
        }
    }

    let result = '';
    for (let i = 0; i < encodedMatrix.length; i++) {
        for (let j = 0; j < encodedMatrix[i].length; j++) {
            let index = encodedMatrix[i][j] % wheelOfLetters.length;
            result += wheelOfLetters[index];
        }
    }

    console.log(result.trim());
}