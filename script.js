let table = document.getElementById('bagua-table');
let tableEdit = null;

function createTableEdit(tableData) {
    tableData.classList.add('edit-td');
    let textHtml = tableData.innerHTML;

    let form = document.createElement('form');
    form.classList.add('edit-area');

    let textArea = document.createElement('textarea');
    textArea.value = textHtml;

    form.appendChild(textArea);

    const savedText = textHtml;
    const talbeDataFinishEdit = (event) => {
        let value = event.target.value;
        if (value == "true") {
            tableData.innerHTML = textArea.value;
        } else {
            tableData.innerHTML = savedText;
        }
        tableEdit = null;
        tableData.classList.remove('edit-td');
    }

    let btnOk = document.createElement('button');
    btnOk.innerHTML = "ОК";
    btnOk.type = "button";
    btnOk.value = "true";
    btnOk.classList.add('edit-controls');
    btnOk.onclick = talbeDataFinishEdit;

    form.appendChild(btnOk);

    let btnCancel = document.createElement('button');
    btnCancel.innerHTML = "ОТМЕНА";
    btnCancel.type = "button";
    btnCancel.value = "false";
    btnCancel.classList.add('edit-controls');
    btnCancel.onclick = talbeDataFinishEdit;

    form.appendChild(btnCancel);

    return form;
}

table.addEventListener('pointerdown', (event) => {
    if (tableEdit) {
        return;
    }

    let tableData = event.target.closest('td');
    if (!tableData) {
        return;
    }

    tableEdit = createTableEdit(tableData);
    tableData.replaceChildren(tableEdit);
})