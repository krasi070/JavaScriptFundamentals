function distanceIn3D(input) {
    let [x1, y1, z1, x2, y2, z2] = input.map(Number);
    let distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));
    console.log(distance);
}