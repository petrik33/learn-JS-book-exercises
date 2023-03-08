let slider = document.getElementById('slider');

let thumb = slider.querySelector('.thumb');

function clamp(value, minValue, maxValue) {
    return Math.max(Math.min(value, maxValue), minValue);
}

const onThumbMouseDown = (event) => {
    let thumb = event.target;
    let shift = event.clientX - thumb.getBoundingClientRect().left;
    let slider = thumb.parentNode;

    let sliderWidth = slider.offsetWidth;
    let thumbWidth = thumb.clientWidth;

    let sliderX = slider.getBoundingClientRect().left;

    const thumbSetPosition = (posX) => {
        posX = clamp(posX, 0, sliderWidth - thumbWidth);
        thumb.style.left = posX + "px";
    }

    const onMouseMove = (event) => {
        let x = (event.pageX - shift - sliderX);
        // let progress = clamp(x / (sliderWidth - thumbWidth), 0, 1);
        thumbSetPosition(x);
    }

    const onMouseUp = (event) => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    event.preventDefault();
}

thumb.addEventListener('mousedown', onThumbMouseDown);
thumb.ondragstart = () => false;