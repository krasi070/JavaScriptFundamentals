function medenkaWars(attacks) {
    let darkSideDamage = 0;
    let darkSidePreviousValue = undefined;
    let darkSideNumberOfSameAttacks = 0;
    let lightSideDamage = 0;
    let lightSidePreviousValue = undefined;
    let lightSideNumberOfSameAttacks = 0;
    for (let attack of attacks) {
        let [value, side, medenkas] = attack.split(/\s+/);
        if (side == 'dark') {
            if (darkSidePreviousValue != undefined &&
                darkSidePreviousValue == value) {
                darkSideNumberOfSameAttacks++;
            } else {
                darkSideNumberOfSameAttacks = 1;
                darkSidePreviousValue = value;
            }

            if (darkSideNumberOfSameAttacks == 5) {
                darkSideDamage += value * 60 * 4.5;
                darkSideNumberOfSameAttacks = 0;
                darkSidePreviousValue = undefined;
            } else {
                darkSideDamage += value * 60;
            }
        } else {
            if (lightSidePreviousValue != undefined &&
                lightSidePreviousValue == value) {
                lightSideNumberOfSameAttacks++;
            } else {
                lightSideNumberOfSameAttacks = 1;
                lightSidePreviousValue = value;
            }

            if (lightSideNumberOfSameAttacks == 2) {
                lightSideDamage += value * 60 * 2.75;
                lightSideNumberOfSameAttacks = 0;
                lightSidePreviousValue = undefined;
            } else {
                lightSideDamage += value * 60;
            }
        }
    }

    if (lightSideDamage > darkSideDamage) {
        console.log("Winner - Vitkor");
        console.log(`Damage - ${lightSideDamage}`);
    } else {
        console.log("Winner - Naskor");
        console.log(`Damage - ${darkSideDamage}`);
    }
}