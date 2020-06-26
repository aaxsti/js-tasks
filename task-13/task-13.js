function every(arr, test) {
    for (let elem of arr) {
        if (test(elem) === false) {
            return false;
        }
    }
    return true;
}

function some(arr, test) {
    return !arr.some(elem => !test(elem));
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

console.log(some([1, 3, 5], n => n < 10));
console.log(some([2, 4, 16], n => n < 10));
console.log(some([], n => n < 10));
