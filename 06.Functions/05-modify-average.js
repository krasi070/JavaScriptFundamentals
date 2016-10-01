function modifyAverage([number]) {
    while (averageValueOfDigits() <= 5) {
        number += "9";
    }

    console.log(number);

    function averageValueOfDigits() {
        let sum = 0;
        for (let i = 0; i < number.length; i++) {
            sum += Number(number[i]);
        }

        return sum / number.length;
    }
}