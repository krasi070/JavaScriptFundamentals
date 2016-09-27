function areaAndPerimeter([a, b]) {
    [a, b] = [a, b].map(Number);
    let area = a * b;
    let perimeter = 2 * (a + b);
    console.log(`${area}\n${perimeter}`);
}