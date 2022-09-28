const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

console.log(startBtn);
let counter = 0;
startBtn.addEventListener('click', countDecrement);
stopBtn.addEventListener('click', countIncrement);

function countDecrement() {
  counter -= 1;
}
function countIncrement() {
  counter += 1;
}
