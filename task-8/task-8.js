function reverseArray(arr) {
    let revArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    return revArr;
}

console.log(reverseArray(["a", "b", "c"]));

function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);