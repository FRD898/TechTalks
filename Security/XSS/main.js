const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue(e) {
    console.log(e.target.value)
    log.innerHTML = e.target.value
}