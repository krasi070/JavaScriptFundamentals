function lowestPriceInCities(input) {
    let products = {};
    for (let line of input) {
        let [town, product, price] = line.split(' | ');
        if (products[product] == undefined) {
            products[product] = {};
        }

        products[product][town] = Number(price);
    }

    for (let product in products) {
        let priceTown = '';
        let price = Number.POSITIVE_INFINITY;
        for (let town in products[product]) {
            if (price > products[product][town]) {
                price = products[product][town];
                priceTown = town;
            }
        }

        console.log(`${product} -> ${price} (${priceTown})`);
    }
}