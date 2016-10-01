function cookingByNumbers(input) {
    let result = Number(input[0]);
    let chop = n => n / 2;
    let dice = n => Math.sqrt(n);
    let spice = n => n + 1;
    let bake = n => n * 3;
    let fillet = n => n * 0.8;

    for (let i = 1; i < input.length; i++) {
        switch (input[i]) {
            case "chop":
                result = chop(result);
                break;
            case "dice":
                result = dice(result);
                break;
            case "spice":
                result = spice(result);
                break;
            case "bake":
                result = bake(result);
                break;
            case "fillet":
                result = fillet(result);
                break;
        }

        console.log(result);
    }
}