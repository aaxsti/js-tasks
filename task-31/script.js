let dots = [];

for (let i = 0; i < 15; i++) {
    let divElement = document.createElement("div");
    divElement.className = "trail";
    document.body.appendChild(divElement);
    dots.push(divElement);
}

let curDot = 0;

addEventListener("mousemove", event => {
    let dot = dots[curDot];
    dot.style.left = (event.pageX - 2) + "px";
    dot.style.top = (event.pageY - 1) + "px";
    curDot = (curDot + 11) % dots.length;
});