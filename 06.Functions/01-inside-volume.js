function insideVolume(points) {
    points = points.map(Number);
    let xMin = 10;
    let xMax = 50;
    let yMin = 20;
    let yMax = 80;
    let zMin = 15;
    let zMax = 50;

    for (let i = 0; i < points.length; i += 3) {
        console.log(inVolume(points[i], points[i + 1], points[i + 2]) ? "inside" : "outside");
    }

    function inVolume(x, y, z) {
        if (x >= xMin && x <= xMax &&
            y >= yMin && y <= yMax &&
            z >= zMin && z <= zMax) {
            return true;
        }

        return false;
    }
}