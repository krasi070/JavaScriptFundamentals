function useYourChainsBuddy([encryptedText]) {
    let result = [];
    let pattern = /<p>(.+?)<\/p>/g;
    let match;
    while (match = pattern.exec(encryptedText)) {
        result.push(match[1]);
    }

    for (let i = 0; i < result.length; i++) {
        let decryptedText = "";
        result[i] = result[i].replace(/[^a-z0-9]/g, " ").trim();
        for (let j = 0; j < result[i].length; j++) {
            let charCode = result[i].charCodeAt(j);
            if (charCode >= 97 && charCode < 110) {
                decryptedText += String.fromCharCode(charCode + 13);
            } else if (charCode >= 110 && charCode <= 122) {
                decryptedText += String.fromCharCode(charCode - 13);
            } else {
                decryptedText += result[i][j];
            }
        }

        decryptedText = decryptedText
            .split(/\s+/)
            .filter(e => e != '')
            .join(' ');
        result[i] = decryptedText;
    }

    console.log(result.join(' '));
}

useYourChainsBuddy(['<html><head><title></title></head><body><h1>hello</h1><p>znahny!@#%&&&&****</p><div><button>dsad</button></div><p>grkg^^^^%%%)))([]12</p></body></html>']);