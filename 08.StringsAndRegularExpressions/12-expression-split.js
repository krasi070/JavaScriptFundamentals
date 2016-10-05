function expressionSplit([jsCode]) {
    let result = jsCode.split(/[\s,.();]+/);
    console.log(result.join('\n'));
}