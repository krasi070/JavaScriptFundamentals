function rectangleOfStars(size = 5) {
    for (let i = 1; i <= size; i++) {
        console.log('* '.repeat(size - 1) + '*');
    }
}