function extractTheLinks(text) {
    text = text.join(' ');
    let match = text.match(/www\.[A-Za-z0-9][A-Za-z0-9-]+(\.[a-z]+)+/g);
    if (match) {
        console.log(match.join('\n'));
    }
}