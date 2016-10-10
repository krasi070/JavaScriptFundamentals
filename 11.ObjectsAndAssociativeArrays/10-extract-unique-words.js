function extractUniqueWords(input) {
    let set = new Set();
    for (let sentence of input) {
        let words = sentence
            .split(/[^A-Za-z]+/)
            .filter(w => w != '')
            .map(w => w.toLowerCase());
        for (let word of words) {
            set.add(word);
        }
    }

    let result = Array.from(set);
    console.log(result.join(', '));
}