function countBs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'B') {
            count++;
        }
    }
    return count;
}

function countChar(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

console.log(countBs('BBS'));
console.log(countBs("BC"));
console.log(countChar('kkoll', "l"));
console.log(countChar("hkkhkkk", "k"));