let elem = document.getElementById('elem');

setTimeout(() => {
    new HoverIntent({
        elem,
        over() {
            tooltip.style.left = elem.getBoundingClientRect().left + 5 + 'px';
            tooltip.style.top = elem.getBoundingClientRect().bottom + 5 + 'px';
            tooltip.hidden = false;
        },
        out() {
            tooltip.hidden = true;
        }
    })
}, 2000);
