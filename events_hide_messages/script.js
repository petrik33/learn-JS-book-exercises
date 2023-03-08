function onClickButtonClose(event) {
    if(event.target.dataset.close != undefined) {
        let message = event.target.closest('div.pane');
        message.remove();
    }
}

let container = document.getElementById('container');
container.addEventListener('click', onClickButtonClose);