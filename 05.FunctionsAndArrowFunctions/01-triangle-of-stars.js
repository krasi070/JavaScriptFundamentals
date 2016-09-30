function triangleOfStars([size]) {
    size = Number(size);
    for (let i = 1; i <= size; i++) {
        printLineOfStars(i);
    }

    for (let i = size - 1; i > 0; i--) {
        printLineOfStars(i);
    }_

    function printLineOfStars(length) {
        console.log('*'.repeat(length));
    }
}