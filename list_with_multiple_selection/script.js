let list = document.getElementById('ul');
list.addEventListener("click", function (event) {
    let item = event.target;

    if(item.tagName != "LI") {
        return;
    }

    if(event.ctrlKey || event.metaKey) {
        toggleSelect(item);
    } else {
        singleSelect(item);
    }
});

list.addEventListener("mousedown", function(event) {
    event.preventDefault();
});

function toggleSelect(li) {
    li.classList.toggle('selected');
}

function singleSelect(li) {
    let selected = ul.querySelectorAll('.selected');
    for(let elem of selected) {
        elem.classList.remove('selected');
    }
    li.classList.add('selected');
}