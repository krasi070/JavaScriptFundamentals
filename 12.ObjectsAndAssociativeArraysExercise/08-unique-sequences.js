function uniqueSequences(arrays) {
    let map = new Map();
    for (let array of arrays) {
        array = JSON.parse(array).sort((a, b) => b - a);
        map.set(array.join(', '), array);
    }

    map = new Map([...map.entries()]
        .sort((a, b) => a[1].length - b[1].length))
        .forEach(a => console.log(`[${a.join(', ')}]`));
}