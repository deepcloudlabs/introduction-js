function emptyElement(element) {
    let node = element;
    while (element.hasChildNodes()) {
        if (node.hasChildNodes()) {
            node = node.lastChild;
        } else {
            node = node.parentNode;
            node.removeChild(node.lastChild);
        }
    }
}
