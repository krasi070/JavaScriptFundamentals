function sumByTown(input) {
    let towns = {};
    for (let i = 0; i < input.length; i += 2) {
        let townName = input[i];
        let income = Number(input[i + 1]);
        towns[townName] != undefined ?
            towns[townName] += income :
            towns[townName] = income;
    }

    console.log(JSON.stringify(towns));
}