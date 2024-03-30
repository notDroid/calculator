const NUMBERS = ['+/-','.','0','1','2','3','4','5','6','7','8','9'];
const OPERATIONS = ['+','-','x','/','%'];
const BUTTONS = document.querySelectorAll('.button');
const DISPLAY = document.querySelector('#calculator-head');
const LIMIT = 7;



const number_btns = Array.from(BUTTONS).filter(
    (btn) => NUMBERS.includes(btn.innerHTML)
)

const opr_btns = Array.from(BUTTONS).filter(
    (btn) => OPERATIONS.includes(btn.innerHTML)
)

const eq_btn = Array.from(BUTTONS).filter(
    (btn) => btn.innerHTML == '='
)[0]

const clear_btn = Array.from(BUTTONS).filter(
    (btn) => btn.innerHTML == 'AC'
)[0]



let expr = '';
let opr = '';
let num1 = NaN;
let num2 = NaN;
let splitExpr;
let pos = true;



number_btns.forEach(
    function (btn) {
        btn.addEventListener('click', addToExpr)
        btn.addEventListener('click', displayNumber)
    }
)

opr_btns.forEach(
    function (btn) {
        btn.addEventListener('click', setOpr)
    }
)

eq_btn.addEventListener('click', operate)
eq_btn.addEventListener('click', displayNumber)

clear_btn.addEventListener('click', clearDisplay)



function displayNumber() {
    if (expr.includes('.')) {
        splitExpr = expr.split('.');
    } else {
        splitExpr = [expr, '']
    }
    
    if (splitExpr[0].length > LIMIT) {
        DISPLAY.innerHTML = 'Overflow'
    } else if (splitExpr[1].length > LIMIT - splitExpr[0].length) {
        DISPLAY.innerHTML = splitExpr[0] + '.' + splitExpr[1].substring(0,LIMIT - 1);
    } else {
        DISPLAY.innerHTML = expr;
    }
}

function addToExpr(e) {
    if (e.target.innerHTML == '+/-') {
        if (pos) {
           expr = '-' + expr;
           pos = false;
        } else {
            expr = expr.substring(1)
            pos = true;
        }
    } else {
        expr += e.target.innerHTML;
    }

    if (opr == '') {    
        num1 = Number(expr);
    } else {
        num2 = Number(expr);
    }
    console.log('expr: ' + expr)
    console.log('num1: ' + num1)
    console.log('num2: ' + num2)
}

function clearDisplay() {
    DISPLAY.innerHTML = '';
    expr = ''
    opr = ''
}

function setOpr(e) {
    if (opr != '') {
        operate();
        displayNumber();
    }
    opr = e.target.innerHTML;
    expr = '';
    console.log('opr: ' + opr)
}

function operate() {
    if (opr == '+') {
        num1 = num1 + num2;
    }
    if (opr == '-') {
        num1 = num1 - num2;
    }
    if (opr == 'x') {
        num1 = num1 * num2;
    }
    if (opr == '/') {
        num1 = num1 / num2;
    }
    if (opr == '%') {
        num1 = num1 % num2;
    }

    expr = String(num1);
    opr = '';
}