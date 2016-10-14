function allThatLuggage(input) {
    let sortingCriterion = input.pop();
    let people = {};
    for (let line of input) {
        let args = line.split(/\.*\*\.*/);
        let name = args[0].trim();
        let luggage = args[1];
        let isFood = args[2] == 'true';
        let isDrink = args[3] == 'true';
        let type = 'other';
        if (isFood) {
            type = 'food';
        } else if (isDrink) {
            type = 'drink';
        }

        let isFragile = args[4] == 'true';
        let weight = Number(args[5]);
        if (weight > 100) {
            continue;
        }

        let transferredWith = args[6];
        if (people[name] == undefined) {
            people[name] = {};
        }

        people[name][luggage] = {
            kg: weight,
            fragile: isFragile,
            type: type,
            transferredWith: transferredWith
        };
    }

    let sortedLuggage = [];
    if (sortingCriterion == 'luggage name') {
        for (let name in people) {
            sortedLuggage.push(Object.keys(people[name]).sort());
        }
    } else if (sortingCriterion == 'weight') {
        for (let name in people) {
            sortedLuggage.push(Object.keys(people[name]).sort((a, b) => {
                return people[name][a].kg - people[name][b].kg;
            }));
        }
    } else {
        for (let name in people) {
            sortedLuggage.push(Object.keys(people[name]));
        }
    }

    let currLuggage = 0;
    let result = {};
    for (let name in people) {
        result[name] = {};
        for (let luggage of sortedLuggage[currLuggage]) {
            result[name][luggage] = people[name][luggage];
        }

        currLuggage++;
    }

    console.log(JSON.stringify(result));
}