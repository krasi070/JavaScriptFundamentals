function heroicInventory(heroesData) {
    let heroes = [];
    for (let heroData of heroesData) {
        let [name, level, items] = heroData.split(' / ');
        heroes.push({
            name: name,
            level: Number(level),
            items: items ? items.split(', ') : []
        });
    }

    console.log(JSON.stringify(heroes));
}