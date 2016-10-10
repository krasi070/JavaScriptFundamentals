function countWordsWithMap([text]) {
    let words = text
        .split(/[^A-Za-z0-9_]/g)
        .filter(w => w != '')
        .map(w => w.toLowerCase());
    let map = new Map();
    for (let word of words) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    }

    map = new Map([...map.entries()].sort());
    for (let [word, count] of map) {
        console.log(`'${word}' -> ${count} times`);
    }
}

countWordsWithMap(["Far too slow, you're far too slow."])