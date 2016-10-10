function goshkoTheRabbit(input) {
    let directions = input.shift().split(', ');
    let garden = input.map(r => r.split(', '));
    let carrotPattern = /{\!}/g;
    let cabbagePattern = /{\*}/g;
    let lettucePattern = /{\&}/g;
    let turnipPattern = /{#}/g;
    let goshkoRow = 0;
    let goshkoCol = 0;
    let data = {
        "&": 0,
        "*": 0,
        "#": 0,
        "!": 0,
        "wall hits": 0
    };
    let hitWall = false;
    let passedCells = [];
    for (let direction of directions) {
        switch (direction) {
            case 'right':
                if (goshkoCol + 1 < garden[goshkoRow].length) {
                    goshkoCol++;
                } else {
                    data["wall hits"]++;
                    hitWall = true;
                }
                break;
            case 'left':
                if (goshkoCol - 1 >= 0) {
                    goshkoCol--;
                } else {
                    data["wall hits"]++;
                    hitWall = true;
                }
                break;
            case 'up':
                if (goshkoRow - 1 >= 0) {
                    goshkoRow--;
                } else {
                    data["wall hits"]++;
                    hitWall = true;
                }
                break;
            case 'down':
                if (goshkoRow + 1 < garden.length) {
                    goshkoRow++;
                } else {
                    data["wall hits"]++;
                    hitWall = true;
                }
                break;
        }

        if (!hitWall) {
            garden[goshkoRow][goshkoCol] = eatVegetables(garden[goshkoRow][goshkoCol]);
            passedCells.push(garden[goshkoRow][goshkoCol]);
        }

        hitWall = false;
    }

    console.log(JSON.stringify(data));
    console.log(passedCells.length == 0 ? "no" : passedCells.join('|'));

    function eatVegetables(vegetables) {
        let carrotMatch = vegetables.match(carrotPattern);
        let cabbageMatch = vegetables.match(cabbagePattern);
        let lettuceMatch = vegetables.match(lettucePattern);
        let turnipMatch = vegetables.match(turnipPattern);

        data["!"] += carrotMatch ? carrotMatch.length : 0;
        data["*"] += cabbageMatch ? cabbageMatch.length : 0;
        data["&"] += lettuceMatch ? lettuceMatch.length : 0;
        data["#"] += turnipMatch ? turnipMatch.length : 0;

        return vegetables
            .replace(carrotPattern, "@")
            .replace(cabbagePattern, "@")
            .replace(lettucePattern, "@")
            .replace(turnipPattern, "@");
    }
}