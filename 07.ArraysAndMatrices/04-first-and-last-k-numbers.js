function firstAndLastKNumbers(arr) {
    let k = Number(arr[0]);
    arr = arr.slice(1, arr.length).map(Number);
    let firstKElements = arr.slice(0, Math.min(arr.length, k));
    let lastKElements = arr.slice(Math.max(arr.length - k, 0), arr.length);
    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}