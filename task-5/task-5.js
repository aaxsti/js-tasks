function isEven(num) {
    num = Math.abs(num);
    if (num === 0) {
        return true;
    } else if (num === 1) {
        return false;
    } else {
        return isEven(num - 2);
    }
}

console.log(isEven(-5));
console.log(isEven(0));
console.log(isEven(22));
