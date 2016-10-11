function JSONsTable(input) {
    let html = '<table>\n';
    for (let i = 0; i < input.length; i++) {
        html += '\t<tr>\n';
        let employee = JSON.parse(input[i]);
        html += `\t\t<td>${escape(employee.name + '')}</td>\n`;
        html += `\t\t<td>${escape(employee.position + '')}</td>\n`;
        html += `\t\t<td>${escape(employee.salary + '')}</td>\n`;

        html += '\t</tr>\n';
        // Correct way in judge -> html += '\t<tr>\n';
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