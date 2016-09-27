function cone([radius, height]) {
    [radius, height] = [radius, height].map(Number);
    let volume = radius * radius * height * Math.PI / 3;
    let area = Math.PI * radius * (radius + Math.sqrt(radius * radius + height * height));

    console.log(`volume = ${volume}`);
    console.log(`area = ${area}`);
}