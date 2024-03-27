const NUMBERS = ['1','2','3','4','5','6','7','8','9']
const BUTTONS = document.querySelectorAll('.button');
const DISPLAY = document.querySelector('#calculator-head')

const number_btns = Array.from(BUTTONS).filter(
    (btn) => NUMBERS.includes(btn.innerHTML)
)

const clear_btn = Array.from(BUTTONS).filter(
    (btn) => btn.innerHTML == 'AC'
)[0]

let expr = '';

number_btns.forEach(
    function (btn) {
        btn.addEventListener('click', addToExpr)
        btn.addEventListener('click', displayNumber)
    }
)

clear_btn.addEventListener('click', clearDisplay)

function displayNumber() {
    DISPLAY.innerHTML = expr;
}

function addToExpr(e) {
    expr += e.target.innerHTML;
    console.log(expr);
}

function clearDisplay() {
    DISPLAY.innerHTML = '';
    expr = ''
}


