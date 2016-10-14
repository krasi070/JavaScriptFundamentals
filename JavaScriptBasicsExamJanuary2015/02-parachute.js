function parachute(area) {
    area = area.map(r => r.split(''));
    let jumperRow = 0;
    let jumperCol = -1;
    for (let line of area) {
        if (jumperCol == -1) {
            jumperCol = line.indexOf('o');
            jumperRow++;
            continue;
        }

        let leftCount = 0;
        let rightCount = 0;
        for (let i = 0; i < line.length; i++) {
            if (line[i] == '<') {
                leftCount++;
            } else if (line[i] == '>') {
                rightCount++;
            }
        }

        let windDirection = rightCount - leftCount;
        jumperCol += windDirection;
        if (line[jumperCol] == '_') {
            console.log(`Landed on the ground like a boss!\n${jumperRow} ${jumperCol}`);
            break;
        } else if (line[jumperCol] == '~') {
            console.log(`Drowned in the water like a cat!\n${jumperRow} ${jumperCol}`);
            break;
        } else if (line[jumperCol] == '\\' || line[jumperCol] == '|' || line[jumperCol] == '/') {
            console.log(`Got smacked on the rock like a dog!\n${jumperRow} ${jumperCol}`);
            break;
        }

        jumperRow++;
    }
}