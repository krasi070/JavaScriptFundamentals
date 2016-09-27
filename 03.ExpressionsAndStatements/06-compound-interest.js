function test([sum, interestRate, compoundingPeriod, time]) {
    [sum, interestRate, compoundingPeriod, time] =
        [sum, interestRate, compoundingPeriod, time].map(Number);

    let compoundingFrequency = 12 / compoundingPeriod;
    let interestRateFraction = interestRate * 0.01;
    let result = sum * Math.pow(1 + interestRateFraction / compoundingFrequency, time * compoundingFrequency);
    console.log(result.toFixed(2));
}