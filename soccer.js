function clamp(value, minValue, maxValue) {
    return Math.max(Math.min(value, maxValue), minValue);
}

document.addEventListener("mousedown", (event) => {
    let draggable = event.target.closest('.draggable');

    if (!draggable) {
        return;
    }

    event.preventDefault();
    draggable.ondragstart = () => false;

    let targetCbox = draggable.getBoundingClientRect();
    let shiftX = event.clientX - targetCbox.left;
    let shiftY = event.clientY - targetCbox.top;

    const moveAt = (pageX, pageY) => {
        let docWidth = document.documentElement.scrollWidth;
        pageX = clamp(pageX - shiftX, 0, docWidth - draggable.offsetWidth);

        let docHeight = document.documentElement.scrollHeight;
        pageY = clamp(pageY - shiftY, 0, docHeight - draggable.offsetHeight);

        draggable.style.left = (pageX) + 'px';
        draggable.style.top = (pageY) + 'px';
    }

    draggable.style.position = "absolute";
    moveAt(event.pageX, event.pageY);

    const onMouseMove = (event) => {
        let scrollX = document.documentElement.scrollLeft;
        let scrollY = document.documentElement.scrollTop;

        let moveX = scrollX + event.clientX;
        let moveY = scrollY + event.clientY;

        moveAt(moveX, moveY);

        let bbox = draggable.getBoundingClientRect();

        let bot = bbox.bottom;
        let height = document.documentElement.clientHeight;
        let botCollision = Math.max(0, bot - height);

        let top = bbox.top;
        let topCollision = Math.min(0, top);

        let collision = botCollision + topCollision;

        if (collision != 0) {
            window.scrollBy(0, collision);
        }
    }

    const onMouseUp = (event) => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
});