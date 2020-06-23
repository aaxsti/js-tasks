function everyLoop(arr, test) {
    for (let elem of arr) {
        if (test(elem) === false) {
            return false;
        }
    }
    return true;
}

function everySome(arr, test) {
    return !arr.some(elem => !test(elem));
}

console.log(everyLoop([1, 3, 5], n => n < 10));
console.log(everyLoop([2, 4, 16], n => n < 10));
console.log(everyLoop([], n => n < 10));

console.log(everySome([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10));
console.log(everySome([], n => n < 10));
