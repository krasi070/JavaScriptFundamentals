function aggregateTable(input) {
    let towns = [];
    let incomeSum = 0;
    for (let pair of input) {
        let [town, income] = pair
            .split('|')
            .map(e => e.trim())
            .filter(e => e != '');
        towns.push(town);
        incomeSum += Number(income);
    }

    console.log(towns.join(', '));
    console.log(incomeSum);
}