const bodyRef = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

const onChangeColor = () => {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  console.log(randomColor);
};

startBtn.addEventListener('click', onChangeColor);
stopBtn.addEventListener('click', stopChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
