function tripLength(points) {
    points = points.map(Number);
    let distance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

    let distance12 = distance(points[0], points[1], points[2], points[3]);
    let distance23 = distance(points[2], points[3], points[4], points[5]);
    let distance13 = distance(points[4], points[5], points[0], points[1]);

    let minDistance = Math.min(
                            distance12 + distance23,
                            distance13 + distance12,
                            distance23 + distance13);
    if (minDistance == distance12 + distance23) {
        console.log(`1->2->3: ${minDistance}`);
    } else if (minDistance == distance13 + distance12) {
        console.log(`2->1->3: ${minDistance}`);
    } else {
        console.log(`1->3->2: ${minDistance}`);
    }
}