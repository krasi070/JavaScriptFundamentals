function triangleOfDollars([n]) {
    n = Number(n);
    for (let i = 1; i <= n; i++) {
        let line = "";
        for (let j = 0; j < i; j++) {
            line += "$";
        }

        console.log(line);
    }
}