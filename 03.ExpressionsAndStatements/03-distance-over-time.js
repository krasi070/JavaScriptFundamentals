function distanceOverTime(input) {
    let [v1, v2, t] = input.map(Number);
    t = t / 3600;
    let s1 = v1 * t;
    let s2 = v2 * t;
    let distance = Math.abs(s1 - s2) * 1000;
    console.log(distance);
}