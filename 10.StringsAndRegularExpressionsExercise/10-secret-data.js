function secretData(text) {
    let namePattern = /(\*[A-Z][A-Za-z]*)(\s+)/g;
    let phonePattern = /(\+[0-9-]{10})(\s+)/g;
    let idPattern = /(![A-Za-z0-9]+)(\s+)/g;
    let secretBasePattern = /(_[A-Za-z0-9]+)(\s+)/g;
    text = text.join('\n') + ' ';
    text = text
        .replace(namePattern, (m, w, s) => '|'.repeat(w.length) + s)
        .replace(phonePattern, (m, w, s) => '|'.repeat(w.length) + s)
        .replace(idPattern, (m, w, s) => '|'.repeat(w.length) + s)
        .replace(secretBasePattern, (m, w, s) => '|'.repeat(w.length) + s);

    console.log(text.substring(0, text.length - 1));
}