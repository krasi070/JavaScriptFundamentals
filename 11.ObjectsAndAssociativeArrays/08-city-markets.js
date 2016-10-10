function cityMarkets(input) {
    let productsDataByTown = {};
    let pattern = /(.+) -> (.+) -> (.+) : (.+)/;
    for (let productData of input) {
        let match = pattern.exec(productData);
        let town = match[1];
        let product = match[2];
        let amountOfSales = Number(match[3]);
        let pricePerUnit = Number(match[4]);
        if (productsDataByTown[town]) {
            if (productsDataByTown[town][product]) {
                productsDataByTown[town][product] += amountOfSales * pricePerUnit;
            } else {
                productsDataByTown[town][product] = amountOfSales * pricePerUnit;
            }
        } else {
            productsDataByTown[town] = {};
            productsDataByTown[town][product] = amountOfSales * pricePerUnit;
        }
    }

    for (let town in productsDataByTown) {
        console.log(`Town - ${town}`);
        for (let product in productsDataByTown[town]) {
            console.log(`$$$${product} : ${productsDataByTown[town][product]}`);
        }
    }
}