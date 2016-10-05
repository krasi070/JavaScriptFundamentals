function restaurantBill(input) {
    let productsPurchased = input.filter((e, i) => i % 2 == 0);
    let price = input
        .filter((e, i) => i % 2 == 1)
        .map(Number)
        .reduce((a, b) => a + b);

    console.log(`You purchased ${productsPurchased.join(', ')} for a total sum of ${price}`);
}