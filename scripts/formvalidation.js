const pass = document.querySelector('#password');
const conf = document.querySelector('#confrim');
const fb = document.querySelector('#feeback');

conf.addEventListener('focusout',controlar)

function controlar() {
    if (pass.value !== conf.value) {
        pass.value=""
        conf.value=""
        pass.focus()
        fb.textContent = "Values do not match. Try again"
    } else {
        fb.textContent=""
    }
}


const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}