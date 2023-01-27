function makeModal(elem) {
    // document.addEventListener('click', (event) => {
    //     if (!event.target.closest("#propmpt-form-container")) {
    //         event.preventDefault();
    //     }
    // })
}

function showPrompt(html, callback) {
    let container = document.createElement('div');
    container.id = "prompt-form-container";

    let form = document.createElement('form');
    form.id = "prompt-form";
    form.name = "prompt-form";

    container.appendChild(form);

    let formDiv = document.createElement('div');
    formDiv.id = "prompt-message";
    formDiv.append(html);

    form.append(formDiv);

    let inputText = document.createElement('input');
    inputText.name = "text";
    inputText.type = "text";
    inputText.focus();

    form.append(inputText);

    const closeForm = () => {
        container.remove();
    }

    let btnOk = document.createElement('input');
    btnOk.type = "submit";
    btnOk.value = "ok";

    form.addEventListener('submit', (event) => {
        callback(inputText.value);
        closeForm();
    });

    form.append(btnOk);

    let btnCancel = document.createElement('input');
    btnCancel.type = "button";
    btnCancel.value = "Cancel";

    btnCancel.addEventListener('click', (event) => {
        callback(null);
        closeForm();
    });

    form.append(btnCancel);
    makeModal(container);

    document.body.append(container);

}

let btnPrompt = document.getElementById('show-prompt');
btnPrompt.addEventListener('click', (event) => {
    showPrompt('Введите что-нибудь<br>...умное :', (value) => {
        alert(value);
    });
})
