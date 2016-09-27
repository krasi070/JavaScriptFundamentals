function figureArea([widthA, heightA, widthB, heightB]) {
    let areaA = widthA * heightA;
    let areaB = widthB * heightB;
    let areaInside = Math.min(widthA, widthB) * Math.min(heightA, heightB);
    let figureArea = areaA + areaB - areaInside;

    return figureArea;
}