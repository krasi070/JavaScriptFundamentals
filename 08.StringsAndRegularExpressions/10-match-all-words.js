function matchAllWords([text]) {
    let words = text
        .split(/[^A-Za-z0-9_]+/)
        .filter(w => w != '');

    console.log(words.join('|'));
}