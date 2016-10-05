function usernames(input) {
    let usernames = [];
    for (let email of input) {
        let [alias, domain] = email.split('@');
        let username = alias + '.';
        let elements = domain.split('.');
        elements.forEach(e => username += e[0]);
        usernames.push(username);
    }

    console.log(usernames.join(', '));
}