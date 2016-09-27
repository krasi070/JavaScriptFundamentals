function filterByAge([minAge, firstName, firstAge, secondName, secondAge]) {
    let firstPerson = { name: firstName, age: Number(firstAge) };
    let secondPerson = { name: secondName, age: Number(secondAge) };

    if (firstPerson.age >= minAge) {
        console.log(firstPerson);
    }

    if (secondPerson.age >= minAge) {
        console.log(secondPerson);
    }
}