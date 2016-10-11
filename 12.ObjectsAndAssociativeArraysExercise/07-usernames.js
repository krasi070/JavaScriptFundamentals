function usernames(input) {
    let usernames = new Set();
    for (let username of input) {
        usernames.add(username);
    }

    console.log([...usernames].sort(usernameCompare).join('\n'));

    function usernameCompare(a, b) {
        return a.length - b.length || a.localeCompare(b);
    }
}