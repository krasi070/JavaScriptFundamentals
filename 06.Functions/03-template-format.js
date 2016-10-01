function templateFormat(input) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>');
    console.log('<quiz>');
    for (let i = 0; i < input.length; i += 2) {
        printQuestionAnswerPair(input[i], input[i + 1]);
    }

    console.log('</quiz>');

    function printQuestionAnswerPair(question, answer) {
        console.log('\t<question>');
        console.log(`\t\t${question}`);
        console.log('\t</question>');

        console.log('\t<answer>');
        console.log(`\t\t${answer}`);
        console.log('\t</answer>');
    }
}