function countWordsInText([text]) {
    let words = text.split(/[^A-Za-z0-9_]+/g).filter(w => w != '');
    let result = {};
    for (let i = 0; i < words.length; i++) {
        result[words[i]] ?
            result[words[i]]++ :
            result[words[i]] = 1;
    }

    console.log(JSON.stringify(result));
}