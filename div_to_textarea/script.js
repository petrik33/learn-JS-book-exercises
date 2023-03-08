// ...ваш код...
// Заметьте: <textarea> должен иметь class="edit"
// my.css содержит стиль, чтобы <textarea> и <div> были одного размера

let edit = document.getElementById('view');

function editToggleTextArea() {
    let textArea = document.createElement('textarea');
    textArea.value = edit.innerHTML;
    textArea.classList.add('edit');
    textArea.id = "view";
    edit.replaceWith(textArea);
    edit = textArea;
    edit.addEventListener("blur", editToggleDiv);
    edit.addEventListener('keydown', (event) => {
        if (event.key != "Enter") {
            return;
        }
        edit.blur();
    });
}

function editToggleDiv() {
    let div = document.createElement('div');
    div.innerHTML = edit.value;
    div.classList.add('view');
    div.id = "view";
    edit.replaceWith(div);
    edit = div;
    edit.addEventListener('pointerdown', editToggleTextArea);
}

edit.addEventListener('pointerdown', editToggleTextArea);