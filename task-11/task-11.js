function concatArrays(arrays, array) {
    return arrays.concat(array);
}

let arrays = [[1, 2, 3], [4, 5], [6]];
let res = arrays.reduce(concatArrays);
console.log(res);