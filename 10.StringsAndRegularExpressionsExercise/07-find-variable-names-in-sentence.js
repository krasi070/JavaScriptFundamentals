function findVariableNamesInSentence([text]) {
    let variables = [];
    let pattern = /_([A-Za-z0-9]+)/g;
    let match = pattern.exec(text);
    while (match) {
        variables.push(match[1]);
        match = pattern.exec(text);
    }

    console.log(variables.join(','));
}