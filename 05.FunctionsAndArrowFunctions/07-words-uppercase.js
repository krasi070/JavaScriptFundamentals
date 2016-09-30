function wordsUppercase([str]) {
    let words = str
        .split(/[^A-Za-z0-9]+/)
        .filter(w => w != "")
        .map(w => w.toUpperCase());

    console.log(words.join(", "));
}