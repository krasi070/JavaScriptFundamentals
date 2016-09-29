function lastMonth([day, month, year]) {
    let previousMonth = month - 1;
    if (previousMonth == 0) {
        previousMonth = 12;
        year = year - 1;
    }

    switch(previousMonth) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log(31);
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log(30);
            break;
        case 2:
            if (year % 4 === 0 && (year % 100 != 0 || year % 400 === 0)) {
                console.log(29);
            } else {
                console.log(28);
            }

            break;
    }
}