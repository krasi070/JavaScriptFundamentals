function dnaHelix([size]) {
    size = Number(size);
    let structure = "ATCGTTAGGG";
    let currElement = 0;

    for (let i = 0; i < size; i++) {
        if (i % 4 == 0) {
            console.log(`**${structure[currElement]}${structure[currElement + 1]}**`);
        } else if ((i % 4) % 2 == 1) {
            console.log(`*${structure[currElement]}--${structure[currElement + 1]}*`);
        } else if (i % 4 == 2) {
            console.log(`${structure[currElement]}----${structure[currElement + 1]}`);
        }

        currElement = (currElement + 2) % structure.length;
    }
}