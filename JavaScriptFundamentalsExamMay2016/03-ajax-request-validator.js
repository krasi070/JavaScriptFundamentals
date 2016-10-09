function ajaxRequestValidator(input) {
    let hashPattern = input.pop();
    let ajaxRequests = [];
    for (let i = 0; i < input.length; i += 3) {
        ajaxRequests.push(`${input[i]}\n${input[i + 1]}\n${input[i + 2]}`);
    }

    let requestPattern =
        /^Method: (GET|POST|PUT|DELETE)\nCredentials: (Basic|Bearer) ([a-zAA-Z0-9]+)\nContent: [A-Za-z0-9.]+$/;
    for (let i = 0; i < ajaxRequests.length; i++) {
        let match = requestPattern.exec(ajaxRequests[i]);
        if (match) {
            let method = match[1];
            let authType = match[2];
            let authString = match[3];
            if (method != 'GET' && authType == 'Basic') {
                console.log(`Response-Method:${method}&Code:401`);
            } else {
                let canDecode = false;
                for (let j = 0; j < hashPattern.length; j += 2) {
                    let numberOfTimes = Number(hashPattern[j]);
                    let letter = hashPattern[j + 1];
                    let letterRegex = new RegExp(letter, 'gi');
                    let match = authString.match(letterRegex);
                    let numberOfLetters = match ? match.length : 0;
                    if (numberOfTimes == numberOfLetters) {
                        canDecode = true;
                        break;
                    }
                }

                if (canDecode) {
                    console.log(`Response-Method:${method}&Code:200&Header:${authString}`);
                } else {
                    console.log(`Response-Method:${method}&Code:403`);
                }
            }
        } else {
            console.log("Response-Code:400");
        }
    }
}