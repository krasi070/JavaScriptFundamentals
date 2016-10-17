function arithmephile(input) {
    input = input.map(Number);
    let maxProduct = undefined;
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= 0 && input[i] < 10) {
            let currProduct = 1;
            let border = Math.min(input.length - 1, i + input[i]);
            for (let j = i + 1; j <= border; j++) {
                currProduct *= input[j];
            }

            if (maxProduct == undefined || maxProduct < currProduct) {
                maxProduct = currProduct;
            }
        }
    }

    console.log(maxProduct);
}