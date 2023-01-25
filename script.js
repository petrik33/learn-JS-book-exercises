/**
     * Проверка видимости элемента (в видимой части страницы)
     * Достаточно, чтобы верхний или нижний край элемента был виден
     */
function isVisible(elem, vBuffer = 0, hBuffer = 0) {
    let bbox = elem.getBoundingClientRect();

    let wWidth = document.documentElement.clientWidth;
    let wHeight = document.documentElement.clientHeight;

    if (bbox.left > wWidth + hBuffer) {
        return false;
    }

    if (bbox.right < -hBuffer) {
        return false;
    }

    if (bbox.top > wHeight + vBuffer) {
        return false;
    }

    if (bbox.bottom < -vBuffer) {
        return false;
    }

    return true;

}

function showVisible() {
    for (let img of document.querySelectorAll('img')) {
        let realSrc = img.dataset.src;
        if (!realSrc) continue;

        if (isVisible(img)) {
            // отключение кеширования
            // эта строка должна быть удалена в "боевом" коде
            realSrc += '?nocache=' + Math.random();

            img.src = realSrc;
            img.classList.add('loaded');

            img.dataset.src = '';
        }
    }

}

window.addEventListener('scroll', showVisible);
showVisible();