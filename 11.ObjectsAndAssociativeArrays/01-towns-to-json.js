function townsToJSON(towns) {
    towns = towns.slice(1);
    let townObjects = [];
    for (let town of towns) {
        let townArgs = town.split(/\s*\|\s*/).filter(t => t != '');
        let townObject = {
            Town: townArgs[0],
            Latitude: Number(townArgs[1]),
            Longitude: Number(townArgs[2])
        };
        townObjects.push(townObject);
    }

    console.log(JSON.stringify(townObjects));
}