function onClickFold(event) {
    let treeHeader = event.target;

    if(treeHeader.tagName != 'SPAN') {
        return;
    }

    let subTree = treeHeader.parentElement.querySelector('ul');

    if(subTree == undefined) {
        return;
    }

    subTree.hidden = !subTree.hidden;
}

let tree = document.getElementById('tree');
tree.addEventListener('click', onClickFold);