let list = document.getElementById('ul');
list.addEventListener("click", function (event) {
    let item = event.target;

    if(item.tagName != "LI") {
        return;
    }

    event.preventDefault();

    if(!(event.ctrlKey || event.metaKey)) {
        let itemsArray = this.querySelectorAll("li");
        for(let li of itemsArray) {
            li.classList.remove("selected");
        }
    }

    item.classList.add("selected");
})