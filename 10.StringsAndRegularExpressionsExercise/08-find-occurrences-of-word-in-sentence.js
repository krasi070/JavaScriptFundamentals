function findOccurrencesOfWordInSentence([sentence, word]) {
    let pattern = new RegExp('\\b' + word + '\\b', 'gi');
    let matches = sentence.match(pattern);
    console.log(matches ? matches.length : 0);
}