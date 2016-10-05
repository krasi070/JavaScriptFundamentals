function matchTheDates(input) {
    let dates = [];
    let match;
    let pattern = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    for (let sentence of input) {
        while (match = pattern.exec(sentence)) {
            dates.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        }
    }

    console.log(dates.join('\n'));
}