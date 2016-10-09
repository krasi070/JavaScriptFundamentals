function angularParser(input) {
    let apps = new Map();
    let addedApps = [];
    let appPattern = /^\$app='([^']+)'$/;
    let controllerPattern = /^\$controller='([^']+)'\&app='([^']+)'$/;
    let modelPattern = /^\$model='([^']+)'\&app='([^']+)'$/;
    let viewPattern = /^\$view='([^']+)'\&app='([^']+)'$/;
    for (let i = 0; i < input.length; i++) {
        let appMatch = appPattern.exec(input[i]);
        let controllerMatch = controllerPattern.exec(input[i]);
        let modelMatch = modelPattern.exec(input[i]);
        let viewMatch = viewPattern.exec(input[i]);
        if (appMatch) {
            let appName = appMatch[1];
            addedApps.push(appName);
            if (!apps.has(appName)) {
                apps.set(appName, {
                    controllers: [],
                    models: [],
                    views: []
                });
            }
        } else if (controllerMatch) {
            let controllerName = controllerMatch[1];
            let appName = controllerMatch[2];
            if (apps.has(appName)) {
                apps.get(appName).controllers.push(controllerName);
            } else {
                apps.set(appName, {
                    controllers: [controllerName],
                    models: [],
                    views: []
                });
            }
        } else if (modelMatch) {
            let modelName = modelMatch[1];
            let appName = modelMatch[2];
            if (apps.has(appName)) {
                apps.get(appName).models.push(modelName);
            } else {
                apps.set(appName, {
                    controllers: [],
                    models: [modelName],
                    views: []
                });
            }
        } else if (viewMatch) {
            let viewName = viewMatch[1];
            let appName = viewMatch[2];
            if (apps.has(appName)) {
                apps.get(appName).views.push(viewName);
            } else {
                apps.set(appName, {
                    controllers: [],
                    models: [],
                    views: [viewName]
                });
            }
        }
    }

    for (let [k, v] of apps) {
        if (addedApps.indexOf(k) == -1) {
            apps.delete(k);
        }
    }

    apps = apps.sort((a, b) => {
        let contrllersA = a.controllers.length;
        let contrllersB = b.controllers.length;
    });
}

angularParser(["$controller='PHPController'&app='Languag Parser'",
                "$controller='JavaController'&app='Language Parser'",
                "$controller='C#Controller'&app='Language Parser'",
                "$controller='C++Controller'&app='Language Parser'",
                "$app='Garbage Collector'",
                "$controller='GarbageController'&app='Garbage Collector'",
                "$controller='SpamController'&app='Garbage Collector'",
                "$app='Language Parser'"]
);