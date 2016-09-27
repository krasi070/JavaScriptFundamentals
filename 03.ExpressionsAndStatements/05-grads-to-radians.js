function gradsToRadians([grads]) {
    grads = Number(grads);
    grads = grads % 400;
    if (grads < 0) {
        grads += 400;
    }

    let radians = grads *  0.9;
    console.log(radians);
}