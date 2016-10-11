function systemComponents(input) {
    let componentsBySystem = new Map();
    for (let systemData of input) {
        let [system, component, subComponent] = systemData.split(' | ');
        if (componentsBySystem.has(system)) {
            if (componentsBySystem.get(system).has(component)) {
                componentsBySystem.get(system).get(component).push(subComponent);
            } else {
                componentsBySystem.get(system).set(component, [subComponent]);
            }
        } else {
            componentsBySystem.set(system, new Map());
            componentsBySystem.get(system).set(component, [subComponent]);
        }
    }

    componentsBySystem = new Map([...componentsBySystem.entries()].sort((a, b) => {
        if (a[1].size == b[1].size) {
            return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
        }

        return b[1].size - a[1].size;
    }));

    for (let [system, subComponentsByComponent] of componentsBySystem) {
        console.log(system);
        subComponentsByComponent = new Map([...subComponentsByComponent.entries()].sort((a, b) => {
            return b[1].length - a[1].length;
        }));
        for (let [component, subComponents] of subComponentsByComponent) {
            console.log(`|||${component}`);
            subComponents.forEach(s => {
                console.log(`||||||${s}`);
            });
        }
    }
}