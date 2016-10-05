function escaping(input) {
    console.log('<ul>');
    for (let text of input) {
        text = text.replace(/\&/g, '&amp;');
        text = text.replace(/</g, '&lt;');
        text = text.replace(/>/g, '&gt;');
        text = text.replace(/"/g, '&quot;');
        console.log(`   <li>${text}</li>`);
    }

    console.log('</ul>');
}