function spyMaster(input) {
    let key = input.shift();
    let regexKey = '';
    for (let i = 0; i < key.length; i++) {
        regexKey += `[${key[i].toLowerCase()}${key[i].toUpperCase()}]`;
    }

    let pattern = new RegExp('(\\s+|^)(' + regexKey + ')' + '(\\s+)([A-Z!%$#]{8,})( |\\.|,|$)', 'g');
    for (let line of input) {
        line = line.replace(pattern, (m, s1, k, s2, g, s3) => s1 + k + s2 + decodeText(g) + s3);
        console.log(line);
    }

    function decodeText(encodedText) {
        return encodedText
            .replace(/!/g, '1')
            .replace(/%/g, '2')
            .replace(/#/g, '3')
            .replace(/\$/g, '4')
            .replace(/[A-Z]/g, m => m.toLowerCase());
    }
}