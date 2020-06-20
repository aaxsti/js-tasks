function loop (value, condition, update, body) {
    for (let i = value; condition(i) ; i = update(i)) {
        body(i);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
