function scoreToHTML([scores]) {
    let html = '<table>\n';
    let scoreObjects = JSON.parse(scores);
    html += '\t<tr><th>name</th><th>score</th></tr>\n';
    for (let score of scoreObjects) {
        html += `\t<tr><td>${escape(score.name)}</td><td>${score.score}</td></tr>\n`;
    }

    html += '</table>';
    console.log(html);

    function escape(text) {
        return text
            .replace(/\&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}