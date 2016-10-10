function populationsInTown(input) {
    let townPopulations = {};
    for (let townData of input) {
        let [townName, population] = townData.split(' <-> ');
        townPopulations[townName] ?
            townPopulations[townName] += Number(population) :
            townPopulations[townName] = Number(population);
    }

    for (let townName in townPopulations) {
        console.log(`${townName} : ${townPopulations[townName]}`);
    }
}