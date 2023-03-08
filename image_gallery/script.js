function showThumbnail(href, title) {
    largeImg.src = href;
    largeImg.alt = title;
}

function onClickThumbs(event) {
    let thumbnail = event.target.closest('a');
    if (!thumbnail) {
        return;
    } 
    showThumbnail(thumbnail.href, thumbnail.title);
    event.preventDefault();
}

thumbs.addEventListener('click', onClickThumbs);

