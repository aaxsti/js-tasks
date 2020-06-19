function arrayToList(arr) {
    let list = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = {
            value: arr[i],
            rest: list
        }
    }
    return list;
}

function listToArray(list) {
    let arr = [];
    for (let i = list; i; i = i.rest) {
        arr.push(i.value);
    }
    return arr;
}

function prepend(elem, list) {
    return {elem: elem, list: list};
}

function nth(list, num) {
    return listToArray(list)[num];
}

function nthRecursive(list, num) {
    if (num === 0)
        return list.value;
    else
        return nth(list.rest, num - 1);
}

console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 12, 31])));
console.log(prepend(12, prepend(15, null)));
console.log(nth(arrayToList([13, 44, 124]), 1));
console.log(nthRecursive(arrayToList([-5, 22, 24]), 2));