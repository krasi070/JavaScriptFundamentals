function autoEngineeringCompany(input) {
    let carModelsByBrands = new Map();
    for (let carModelData of input) {
        let [brand, model, producedCars] = carModelData.split(' | ');
        if (carModelsByBrands.has(brand)) {
            if (carModelsByBrands.get(brand)[model]) {
                carModelsByBrands.get(brand)[model] += Number(producedCars);
            } else {
                carModelsByBrands.get(brand)[model] = Number(producedCars);
            }
        } else {
            carModelsByBrands.set(brand, {});
            carModelsByBrands.get(brand)[model] = Number(producedCars);
        }
    }

    for (let [carBrand, carModelObj] of carModelsByBrands) {
        console.log(carBrand);
        for (let carModel in carModelObj) {
            console.log(`###${carModel} -> ${carModelObj[carModel]}`);
        }
    }
}