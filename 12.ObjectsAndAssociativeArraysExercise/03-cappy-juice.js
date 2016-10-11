function cappyJuice(input) {
    let juiceQuantities = {};
    let juiceBottles = {};
    for (let juice of input) {
        let [type, juiceQuantity] = juice.split(' => ');
        if (juiceQuantities[type]) {
            juiceQuantities[type] += Number(juiceQuantity);
        } else {
            juiceQuantities[type] = Number(juiceQuantity);
        }

        if (juiceQuantities[type] >= 1000) {
            juiceBottles[type] = Math.floor(juiceQuantities[type] / 1000);
        }
    }

    for (let juiceType in juiceBottles) {
        console.log(`${juiceType} => ${juiceBottles[juiceType]}`);
    }
}