function useYourChainsBuddy([encryptedText]) {
    let result = '';
    let pattern = /<p>(.+?)<\/p>/g;
    let match;
    while (match = pattern.exec(encryptedText)) {
        result += match[1];
    }

    let decryptedText = '';
    result = result.replace(/[^a-z0-9]/g, " ").trim();
    for (let i = 0; i < result.length; i++) {
        let charCode = result.charCodeAt(i);
        if (charCode >= 97 && charCode < 110) {
            decryptedText += String.fromCharCode(charCode + 13);
        } else if (charCode >= 110 && charCode <= 122) {
            decryptedText += String.fromCharCode(charCode - 13);
        } else {
            decryptedText += result[i];
        }
    }

    decryptedText = decryptedText
        .split(/\s+/)
        .filter(e => e != '')
        .join(' ');

    console.log(decryptedText);
}