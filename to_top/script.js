let arrowTop = document.getElementById('arrowTop');
arrowToggle(false);

function arrowToggle(toggle) {
    arrowTop.hidden = !toggle;
    // if (!toggle) {
    //     arrowTop.classList.add('hide');
    // } else {
    //     arrowTop.classList.remove('hide');
    // }
}

function arrowHidden() {
    return arrowTop.hidden;
}

document.addEventListener('scroll', (event) => {
    let wHeight = document.documentElement.clientHeight;
    if (window.scrollY >= wHeight) {
        if (arrowHidden()) {
            arrowToggle(true);
        }
    } else {
        if (!arrowHidden()) {
            arrowToggle(false);
        }
    }
});

arrowTop.addEventListener('click', (event) => {
    window.scrollTo(window.scrollX, 0);
})