const colorContainer = document.querySelector('#color-container');
const rgbColorText = document.getElementById('rgb-color');
const answer = document.querySelector('#answer');
const resetButton = document.querySelector('#reset-game');

// Consultei o PR da colega Tamiris Shigaki para resolver o requisito 3 - Turma 19 - A link: https://github.com/tryber/sd-019-a-project-color-guess/pull/23/files
const addColor = () => {
  for (let index = 1; index < 7; index += 1) {
    const divColor = document.createElement('div');
    divColor.id = `color${index}`;
    divColor.className = 'ball';
    divColor.style.backgroundColor = `#${(Math.floor((Math.random() + 8) * 100000))}`;
    colorContainer.appendChild(divColor);
  }
};

// Consultei o PR da colega Sheila Nakashima para resolver o requisito 4 - Turma 19 - A link: https://github.com/tryber/sd-019-a-project-color-guess/pull/15/files
const createGuessText = () => {
  // Gera um número aleatório de 1 a 6 - soma 1 para não resultar em zero
  const colorNumber = (Math.floor(Math.random() * 6 + 1));
  // A cor selecionada aleatoriamente vai ser a id do elemento ex. color1
  const selectedColor = document.querySelector(`#color${colorNumber}`);
  // O texto do elemento (parágrafo com a id 'rgb-color') rgb é igual (atribuído) o backgroundColor do elemento com a id selecionada
  rgbColorText.innerText = selectedColor.style.backgroundColor;
};

const guessColor = (event) => {
  if (event.target.style.backgroundColor === rgbColorText.innerText) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
};

const selectColor = () => {
  const colors = document.querySelectorAll('.ball');
  colors.forEach((color) => {
    color.addEventListener('click', guessColor);
  });
};

const resetGame = () => {
  const colors = document.querySelectorAll('.ball');
  colors.forEach((color) => color.remove());
  answer.innerText = 'Escolha uma cor';
};

resetButton.addEventListener('click', () => {
  resetGame();
  addColor();
  createGuessText();
  selectColor();
});

window.onload = () => {
  addColor();
  createGuessText();
  selectColor();
};
