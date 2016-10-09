function fleaRacing(input) {
    let allowedJumps = Number(input.shift());
    let trackLength = Number(input.shift());
    let fleas = [];
    for (let i = 0; i < input.length; i++) {
        let [name, jumpDistance] = input[i].split(', ');
        fleas[i] = {
            name: name,
            jumpDistance: Number(jumpDistance),
            currPosition: 0
        };
    }

    let winner = undefined;
    for (let i = 0; i < allowedJumps; i++) {
        for (let j = 0; j < fleas.length; j++) {
            fleas[j].currPosition += fleas[j].jumpDistance;
            if (fleas[j].currPosition >= trackLength - 1) {
                winner = fleas[j];
                break;
            }
        }

        if (winner != undefined) {
            break;
        }
    }

    if (winner === undefined) {
        let maxDistance = 0;
        for (let i = 0; i < fleas.length; i++) {
            if (fleas[i].currPosition > maxDistance) {
                maxDistance = fleas[i].currPosition;
            }
        }

        winner = fleas
            .filter(f => f.currPosition == maxDistance)
            .pop();
    }

    console.log('#'.repeat(trackLength));
    console.log('#'.repeat(trackLength));
    for (let i = 0; i < fleas.length; i++) {
        let currFleaTrack =
            '.'.repeat(Math.min(Math.max(0, fleas[i].currPosition), trackLength - 1)) +
            fleas[i].name[0].toUpperCase() +
            '.'.repeat(Math.max(0, trackLength - fleas[i].currPosition - 1));

        console.log(currFleaTrack);
    }

    console.log('#'.repeat(trackLength));
    console.log('#'.repeat(trackLength));
    console.log(`Winner: ${winner.name}`);
}