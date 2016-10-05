function emailValidation([email]) {
    if (/\b[A-Za-z0-9]+@[a-z]+.[a-z]+\b/.test(email)) {
        console.log('Valid');
    } else {
        console.log('Invalid');
    }
}