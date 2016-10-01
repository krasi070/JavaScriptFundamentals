function radioCrystals(input) {
    input = input.map(Number);
    let desiredThickness = input[0];
    let cut = c => c / 4;
    let lap = c => c * 0.8;
    let grind = c => c - 20;
    let etch = c => c - 2;
    let xRay = c => c + 1;
    let transportAndWash = c => Math.floor(c);

    for (let i = 1; i < input.length; i++) {
        let currCrystalThickness = input[i];
        console.log(`Processing chunk ${currCrystalThickness} microns`);

        if (executeOperation(cut, "Cut") ||
            executeOperation(lap, "Lap") ||
            executeOperation(grind, "Grind") ||
            executeOperation(etch, "Etch")) {
            console.log(`Finished crystal ${currCrystalThickness} microns`);
        }

        function executeOperation(operation, operationName) {
            let timesExecuted = 0;
            while (transportAndWash(operation(currCrystalThickness)) >= desiredThickness) {
                currCrystalThickness = operation(currCrystalThickness);
                timesExecuted++;
            }

            if (transportAndWash(operation(currCrystalThickness)) + 1 == desiredThickness) {
                currCrystalThickness = operation(currCrystalThickness);
                timesExecuted++;
            }

            if (timesExecuted > 0) {
                currCrystalThickness = transportAndWash(currCrystalThickness);
                console.log(`${operationName} x${timesExecuted}`);
                console.log("Transporting and washing");
            }

            if (currCrystalThickness == desiredThickness) {
                return true;
            } else if (currCrystalThickness + 1 == desiredThickness) {
                currCrystalThickness = xRay(currCrystalThickness);
                console.log("X-ray x1");
                return true;
            }

            return false;
        }
    }
}