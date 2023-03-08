function onClickConfirmReferal(event) {
    let anchor = event.target.closest('a');
    if(!anchor) {
        return;
    }

    let link = anchor.getAttribute('href');
    let confirmText = 'Leave for ' + link + '?';

    let confirmed = confirm(confirmText);
    if(!confirmed) {
        event.preventDefault();
    }
}

let container = document.getElementById('contents');
container.addEventListener('click', onClickConfirmReferal);