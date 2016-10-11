function storeCatalogue(products) {
    let map = new Map();
    for (let product of products) {
        let [name, price] = product.split(' : ');
        map.set(name, Number(price));
    }

    map = new Map([...map.entries()]
        .sort((a, b) =>
            a[0].toLowerCase().localeCompare(b[0].toLowerCase())));
    let currLetter = '';
    for (let [productName, productPrice] of map) {
        if (currLetter != productName[0]) {
            currLetter = productName[0];
            console.log(currLetter);
        }

        console.log(`  ${productName}: ${productPrice}`);
    }
}