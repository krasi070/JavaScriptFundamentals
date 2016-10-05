function censorship(input) {
    let text = input.shift();
    for (let stringToBeCensored of input) {
        text = text.replace(new RegExp(stringToBeCensored, 'g'), '-'.repeat(stringToBeCensored.length));
    }

    console.log(text);
}