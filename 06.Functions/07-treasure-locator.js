function treasureLocator(points) {
    points = points.map(Number);
    let isInTuvalu = (x, y) => x >= 1 && x <= 3 && y >= 1 && y <= 3;
    let isInTokelau = (x, y) => x >= 8 && x <= 9 && y >= 0 && y <= 1;
    let isInSamoa = (x, y) => x >= 5 && x <= 7 && y >= 3 && y <= 6;
    let isInTonga = (x, y) => x >= 0 && x <= 2 && y >= 6 && y <= 8;
    let isInCook = (x, y) => x >= 4 && x <= 9 && y >= 7 && y <= 8;

    for (let i = 0; i < points.length; i += 2) {
        if (isInTuvalu(points[i], points[i + 1])) {
            console.log("Tuvalu");
        } else if (isInTokelau(points[i], points[i + 1])) {
            console.log("Tokelau");
        } else if (isInSamoa(points[i], points[i + 1])) {
            console.log("Samoa");
        } else if (isInTonga(points[i], points[i + 1])) {
            console.log("Tonga");
        } else if (isInCook(points[i], points[i + 1])) {
            console.log("Cook");
        } else {
            console.log("On the bottom of the ocean");
        }
    }
}