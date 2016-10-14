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

useYourChainsBuddy(['<html><head><title></title></head><body><p>Intro</p><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg%^&%^&^%&^))))()%^&%^&^%&^))))()%^&%^&^%&^))))() fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj punvaf ner nofbyhgryl nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, do not trust it! The illuminati %^&%^&^%&^))))()wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre %^&%^&^%&^))))()%^&%^&^%&^))))()fnvq guna qbar ohg vs lbh chg ba lbhe gverf </p><p>it is frustrating that you have not put car chains yet... embarrassing...</p><p>orsber lbh ernpu fabjl ebnqf lbh jvyy znxr lbhe yvsr jnl rnfvre</p><span>it is not that fun making tests sometimes, onlysometimes :)</span></body>']);