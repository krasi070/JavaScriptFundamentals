function formFiller(input) {
    let username = input.shift();
    let email = input.shift();
    let phone = input.shift();
    for (let line of input) {
        line = line
            .replace(/<![A-Za-z]+!>/g, username)
            .replace(/<@[A-Za-z]+@>/g, email)
            .replace(/<\+[A-Za-z]+\+>/g, phone);
        console.log(line);
    }
}