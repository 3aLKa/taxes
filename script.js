let button = document.getElementById('button');
let input = document.getElementById('input');
let firstBlock = document.getElementById('firstBlock');
let secondBlock = document.getElementById('secondBlock');
let preTaxSalaryText = document.getElementById('preTaxSalaryText');
let taxesText = document.getElementById('taxesText');

let taxesPercent;
let salary;
let taxes;
let ndfl;
let PFR;
let OMS;
let VNiM;
let SoNS;
let preTaxSalary;

function secondBlockHiding() {
    secondBlock.style.display = 'none';
}

function firstBlockHiding() {
    firstBlock.style.display = 'none';
    secondBlock.style.display = '';
}

function taxesCalculator() {
    if (salary * 12 < 5000000) {
        ndfl = salary * 0.13;
    }
    else {
        ndfl = salary * 0.15;
    }

    OMS = salary * 0.051;
    VNiM = salary *0.029;
    if (VNiM > 1032000) {
        VNiM = 1032000;
    }
    OPS = salary * 0.22;
    if (OPS > 1565000) {
        OPS = ((salary - (1565000/22*100)) * 0.1) + 1565000;
    }
    SoNS = salary * 0.002
    taxes = ndfl + OMS + VNiM + OPS + SoNS;
    taxesPercent = taxes/salary*100;
    preTaxSalary = Number(salary) + Number(taxes);
}

function results() {
    preTaxSalaryText.innerHTML = preTaxSalary.toFixed(0);
    taxesText.innerHTML = taxes.toFixed(0) + '₽'  + ' ≈ ' + taxesPercent.toFixed(1) + '%';
}

secondBlockHiding();

input.oninput = function() {
    salary = input.value;
}

button.onclick = function() {
    taxesCalculator();
    firstBlockHiding();
    results();
}
