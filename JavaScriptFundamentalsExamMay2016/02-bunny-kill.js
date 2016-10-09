function bunnyKill(input) {
    let bombBunniesCoordinates = input.pop().split(/\s+/);
    let hanger = input.map(r => r.split(/\s+/).map(Number));
    let bombBunnies = [];
    for (let bombBunnyCoordinates of bombBunniesCoordinates) {
        let [bombBunnyRow, bombBunnyCol] = bombBunnyCoordinates.split(',').map(Number);
        let bombBunny = {
            row: bombBunnyRow,
            column: bombBunnyCol
        };

        bombBunnies.push(bombBunny);
    }

    let snowballKills = 0;
    let snowballDamage = 0;
    for (let i = 0; i < bombBunnies.length; i++) {
        if (hanger[bombBunnies[i].row][bombBunnies[i].column] > 0) {
            let damage = hanger[bombBunnies[i].row][bombBunnies[i].column];
            snowballKills++;
            snowballDamage += damage;
            hanger[bombBunnies[i].row][bombBunnies[i].column] = 0;
            if (bombBunnies[i].row > 0) {
                hanger[bombBunnies[i].row - 1][bombBunnies[i].column] -= damage;
            }

            if (bombBunnies[i].row > 0 && bombBunnies[i].column < hanger[0].length - 1) {
                hanger[bombBunnies[i].row - 1][bombBunnies[i].column + 1] -= damage;
            }

            if (bombBunnies[i].column < hanger[0].length - 1) {
                hanger[bombBunnies[i].row][bombBunnies[i].column + 1] -= damage;
            }

            if (bombBunnies[i].row < hanger.length - 1 && bombBunnies[i].column < hanger[0].length - 1) {
                hanger[bombBunnies[i].row + 1][bombBunnies[i].column + 1] -= damage;
            }

            if (bombBunnies[i].row < hanger.length - 1) {
                hanger[bombBunnies[i].row + 1][bombBunnies[i].column] -= damage;
            }

            if (bombBunnies[i].row < hanger.length - 1 && bombBunnies[i].column > 0) {
                hanger[bombBunnies[i].row + 1][bombBunnies[i].column - 1] -= damage;
            }

            if (bombBunnies[i].column > 0) {
                hanger[bombBunnies[i].row][bombBunnies[i].column - 1] -= damage;
            }

            if (bombBunnies[i].row > 0 && bombBunnies[i].column > 0) {
                hanger[bombBunnies[i].row - 1][bombBunnies[i].column - 1] -= damage;
            }
        }
    }

    for (let row = 0; row < hanger.length; row++) {
        for (let col = 0; col < hanger[row].length; col++) {
            if (hanger[row][col] > 0) {
                snowballDamage += hanger[row][col];
                snowballKills++;
                hanger[row][col] = 0;
            }
        }
    }

    console.log(snowballDamage);
    console.log(snowballKills);
}