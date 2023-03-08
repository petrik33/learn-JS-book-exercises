function onClickSort(event) {
    let header = event.target;

    if(header.dataset.type == undefined) {
        return;
    }

    let column = header.cellIndex;

    let tableBody = header.closest('table').querySelector('tbody');
    let rows = Array.from(tableBody.rows);

    let comparator;

    switch (header.dataset.type) {
        case "number":
            comparator = (rowA, rowB) => {
                let valA = Number.parseInt(rowA.cells[column].textContent);
                let valB = Number.parseInt(rowB.cells[column].textContent);
                return valA - valB;
            }
            break;
        case "string":
            comparator = (rowA, rowB) => {
                let valA = rowA.cells[column].textContent;
                let valB = rowB.cells[column].textContent;
                return valA.localeCompare(valB);
            }
            break;
        default:
            return;
    }

    rows = rows.sort(comparator);
    for(let row of rows) {
        tableBody.appendChild(row);
    }
}

let table = document.getElementById('grid');
let tableHeadContainer = table.querySelector('thead');

tableHeadContainer.addEventListener('click', onClickSort);