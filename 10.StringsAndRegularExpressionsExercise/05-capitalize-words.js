function capitalizeWords([text]) {
    text = text.replace(/[A-Za-z]+/g, w => capitalizeWord(w));

    console.log(text);

    function capitalizeWord(word) {
        let result = '';
        for (let i = 0; i < word.length; i++) {
            if (i == 0 && word[i] >= 'a' && word[i] <= 'z') {
                result += String.fromCharCode(word.charCodeAt(i) - 32);
            } else if (i != 0 && word[i] >= 'A' && word[i] <= 'Z') {
                result += String.fromCharCode(word.charCodeAt(i) + 32);
            } else {
                result += word[i];
            }
        }

        return result;
    }
}

capitalizeWords(['Was that Easy? tRY thIs onE for SiZe!']);