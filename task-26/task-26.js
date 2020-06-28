let balloon = document.querySelector('p');
let size;

function newSize(a) {
    size = a;
    balloon.style.fontSize = a + 'px';
}

newSize(20);

function changeSize(event) {
    if (event.key === 'ArrowUp') {
        if (size > 70) {
            balloon.textContent = '💥';
            document.body.removeEventListener('keydown', changeSize);
        } else {
            newSize(size * 1.1);
            event.preventDefault();
        }
    } else if (event.key === 'ArrowDown') {
        newSize(size * 0.9);
        event.preventDefault();
    }
}
document.body.addEventListener('keydown', changeSize);