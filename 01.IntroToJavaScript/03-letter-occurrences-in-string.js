function letterOccurrence([string, letter]) {
    let numberOfOccurrences = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == letter) {
            numberOfOccurrences++;
        }
    }

    return numberOfOccurrences;
}