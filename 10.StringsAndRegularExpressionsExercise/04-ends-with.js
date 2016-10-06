function endsWith([text, end]) {
    return text.indexOf(end) + end.length == text.length;
}