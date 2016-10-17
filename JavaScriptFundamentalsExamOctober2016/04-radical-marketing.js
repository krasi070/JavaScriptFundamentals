function radicalMarketing(commands) {
    let people = new Map();
    for (let command of commands) {
        let args = command.split('-');
        let firstPersonName = args[0];
        if (args.length == 1) {
            if (!people.has(firstPersonName)) {
                people.set(firstPersonName, {
                    subscribers: [],
                    subscribedTo: []
                });
            }
        } else {
            let secondPersonName = args[1];
            if (people.has(firstPersonName) &&
                people.has(secondPersonName) &&
                firstPersonName != secondPersonName) {
                people.get(firstPersonName).subscribedTo.push(secondPersonName);
                people.get(secondPersonName).subscribers.push(firstPersonName);
            }
        }
    }

    people = new Map([...people.entries()].sort((a, b) => {
        return b[1].subscribers.length - a[1].subscribers.length ||
            b[1].subscribedTo.length - a[1].subscribedTo.length;
    }));

    let result = Array.from(people);
    console.log(result[0][0]);
    for (let i = 0; i < result[0][1].subscribers.length; i++) {
        console.log(`${i + 1}. ${result[0][1].subscribers[i]}`);
    }
}