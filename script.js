function getScrollHeight() {
    return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
}

function appendPlaceHoldingText(elem) {
    let text = Date.now().toString() + "\n";
    elem.append(text);
}

let scrollHeight = getScrollHeight();
let placeTaker = document.getElementById('place-taker');

const onScroll = (event) => {
    let wHeight = document.documentElement.clientHeight;
    while (scrollHeight - (window.scrollY + wHeight) <= 100) {
        appendPlaceHoldingText(placeTaker);
        scrollHeight = getScrollHeight();
    }
};

onScroll();

document.addEventListener('scroll', onScroll);