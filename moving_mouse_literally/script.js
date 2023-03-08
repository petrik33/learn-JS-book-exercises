let mouse = document.getElementById("mouse");
mouse.tabIndex = -1;

const movement = 9;

function mouseMoveHorizontally(distance) {
    let curLeft = parseInt(mouse.style.left);
    curLeft += distance;
    mouse.style.left = curLeft + 'px';
}

function mouseMoveVertically(distance) {
    let curTop = Number.parseInt(mouse.style.top);
    curTop += distance;
    mouse.style.top = curTop + 'px';
}

mouse.addEventListener('focus', (event) => {

    mouse.style.left = mouse.getBoundingClientRect().left + 'px';
    mouse.style.top = mouse.getBoundingClientRect().top + 'px';

    mouse.style.position = 'fixed';

    const mouseControll = (event) => {
        let key = event.key;

        if (key == "ArrowRight") {
            mouseMoveHorizontally(movement);
        }

        if (key == "ArrowLeft") {
            mouseMoveHorizontally(-movement);
        }

        if (key == "ArrowUp") {
            mouseMoveVertically(-movement);
        }

        if (key == "ArrowDown") {
            mouseMoveVertically(movement);
        }
    };

    mouse.addEventListener('keydown', mouseControll);
    mouse.addEventListener('blur', (event) => {
        mouse.removeEventListener('keydown', mouseControll);
    })

})