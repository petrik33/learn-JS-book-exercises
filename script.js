/**
     * Проверка видимости элемента (в видимой части страницы)
     * Достаточно, чтобы верхний или нижний край элемента был виден
     */
function isVisible(elem) {
    // ...ваш код...
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

            img.dataset.src = '';
        }
    }

}

window.addEventListener('scroll', showVisible);
showVisible();