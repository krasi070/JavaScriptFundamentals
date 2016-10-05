function countOccurrences([target, text]) {
    let count = 0;
    while (text.indexOf(target) != -1) {
        count++;
        text = text.substring(text.indexOf(target) + 1);
    }

    console.log(count);
}