function uncleScroogesBag(bag) {
    let coins = 0;
    for (let i = 0; i < bag.length; i++) {
        let [type, value] = bag[i].split(/\s+/);
        value = Number(value);
        if (type.toLowerCase() == 'coin' && value % 1 == 0 && value > 0) {
            coins += value;
        }
    }

    let gold = Math.floor(coins / 100);
    let silver = Math.floor((coins % 100) / 10);
    let bronze = coins % 10;
    console.log(`gold : ${gold}\nsilver : ${silver}\nbronze : ${bronze}`);
}