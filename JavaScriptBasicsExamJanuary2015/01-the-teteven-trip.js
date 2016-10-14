function theTetevenTrip(input) {
    let consumption = 0;
    for (let line of input) {
        let [carModel, fuelType, routeNumber, luggageWeight] = line.split(' ');
        if (fuelType == 'gas') {
            consumption = 1.2;
        } else if (fuelType == 'diesel') {
            consumption = 0.8;
        } else if (fuelType == 'petrol') {
            consumption = 1;
        }

        luggageWeight = Number(luggageWeight);
        let extraFuel = luggageWeight * 0.01;
        let fuelConsumptionPer100Km = 10 * consumption + extraFuel;
        let extraSnowConsumption = 0.3 * fuelConsumptionPer100Km;
        let fuelConsumed = 0;
        if (routeNumber == 1) {
            fuelConsumed = 110 * (fuelConsumptionPer100Km / 100);
            fuelConsumed += 10 * (extraSnowConsumption / 100);
        } else {
            fuelConsumed = 95 * (fuelConsumptionPer100Km / 100);
            fuelConsumed += 30 * (extraSnowConsumption / 100);
        }

        console.log(`${carModel} ${fuelType} ${routeNumber} ${Math.round(fuelConsumed)}`);
    }
}

theTetevenTrip(
    ['BMW petrol 1 320.5',
        'Golf petrol 2 150.75',
        'Lada gas 1 202',
        'Mercedes diesel 2 312.54']

);