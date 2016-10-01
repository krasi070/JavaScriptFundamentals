function roadRadar([speed, area]) {
    speed = Number(speed);
    switch (area) {
        case "motorway":
            printMessage(speed - 130);
            break;
        case "interstate":
            printMessage(speed - 90);
            break;
        case "city":
            printMessage(speed - 50);
            break;
        case "residential":
            printMessage(speed - 20);
            break;
    }

    function printMessage(deltaSpeed) {
        if (deltaSpeed > 0 && deltaSpeed <= 20) {
            console.log("speeding");
        } else if (deltaSpeed > 20 && deltaSpeed <= 40) {
            console.log("excessive speeding");
        } else if (deltaSpeed > 40) {
            console.log("reckless driving");
        }
    }
}