function byTagName(node, tagName) {
    let found = [];
    tagName = tagName.toUpperCase();

    function explore(node) {
        for (let i = 0; i < node.childNodes.length; i++) {
            let child = node.childNodes[i];
            if (child.nodeType == document.ELEMENT_NODE) {
                if (child.nodeName == tagName) found.push(child);
                explore(child);
            }
        }
    }

    explore(node);
    return found;
}

console.log(byTagName(document.body, "h1").length);
console.log(byTagName(document.body, "span").length);

let para = document.querySelector("p");
console.log(byTagName(para, "span").length);