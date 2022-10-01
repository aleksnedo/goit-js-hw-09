const bodyRef = document.querySelector('body');
const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');
// let intervalId = null;
stopBtnRef.setAttribute('disabled', 'disablet');

const onChangeColorStart = () => {
  intervalId = setInterval(changeBackgroundColor, 1000);
  startBtnRef.setAttribute('disabled', 'disablet');
  stopBtnRef.removeAttribute('disabled');
};

const onChangeColorStop = () => {
  clearInterval(intervalId);
  startBtnRef.removeAttribute('disabled');
  stopBtnRef.setAttribute('disabled', 'disablet');
};

startBtnRef.addEventListener('click', onChangeColorStart);
stopBtnRef.addEventListener('click', onChangeColorStop);

const changeBackgroundColor = () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
