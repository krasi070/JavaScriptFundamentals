function fromJSONToHTMLTable([string]) {
    let objects = JSON.parse(string);
    let html = '<table>\n\t<tr>';
    let objectKeys = [];
    for (let objKey in objects[0]) {
        html += `<th>${escape(objKey)}</th>`;
        objectKeys.push(objKey);
    }

    html += '</tr>\n';
    for (let object of objects) {
        html += '\t<tr>';
        for (let objKey of objectKeys) {
            html += `<td>${escape(object[objKey] + '')}</td>`;
        }

        html += '</tr>\n';
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