function extractText([text]) {
    let regex = /\((.*?)\)/g;
    let result = [];
    while (match = regex.exec(text)) {
        result.push(match[1]);
    }

    console.log(result.join(', '));
}