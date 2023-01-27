function countInvestment(initial, interest, years) {
    // initial: начальная сумма денег
    // interest: проценты, например, 0.05 означает 5% в год
    // years: сколько лет ждать
    let result = Math.round(initial * (1 + interest) ** years);

    return result;
}

let form = document.forms.namedItem('calculator');
let heightPerSum = 0.01;

let monthsInput = form.elements.namedItem('months');
let interestInput = form.elements.namedItem('interest');
let initialInput = form.elements.namedItem('money');

let initialData = document.getElementById('money-before');
let resultData = document.getElementById('money-after');

let initialColumn = document.getElementById('height-before');
let resultColumn = document.getElementById('height-after');

const recalculateInvestment = () => {
    let investment = countInvestment(initialInput.value,
        interestInput.value / 100, monthsInput.value / 12);

    resultData.innerHTML = investment.toString();
    resultColumn.style.height = investment * heightPerSum + 'px';
}

initialInput.addEventListener('input', (event) => {
    initialData.innerHTML = initialInput.value.toString();
    initialColumn.style.height = (initialInput.value * heightPerSum) + 'px';

    recalculateInvestment();
});

interestInput.addEventListener('input', recalculateInvestment);
monthsInput.addEventListener('input', recalculateInvestment);
