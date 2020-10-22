let cat = document.getElementById("cat");
let hat = document.getElementById("hat");

let angle = 0;
let lastTime = null;

function animate(time) {
    if (lastTime != null) angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 40 + 40) + "px";
    cat.style.left = (Math.cos(angle) * 200 + 230) + "px";
    hat.style.top = (Math.sin(angle + Math.PI) * 150 + 150) + "px";
    hat.style.left = (Math.cos(angle + Math.PI) * 180 + 180) + "px";

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);