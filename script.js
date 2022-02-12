const colorContainer = document.querySelector('#color-container');
const rgbColorText = document.getElementById('rgb-color');
const answer = document.querySelector('#answer');
const resetButton = document.querySelector('#reset-game');
const score = document.querySelector('#score');
score.innerText = 0;

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

// Consultei o PR da colega Sheila Nakashima para resolver o requisito 4 - colocar id nos elementos que contém as cores para identificá-los - Turma 19 - A link: https://github.com/tryber/sd-019-a-project-color-guess/pull/15/files
const createGuessText = () => {
  // Gera um número aleatório de 1 a 6 - soma 1 para não resultar em zero
  const colorNumber = (Math.floor(Math.random() * 6 + 1));
  // A cor selecionada aleatoriamente vai ser a id do elemento ex. color1
  const selectedColor = document.querySelector(`#color${colorNumber}`);
  // O texto do elemento rgb (parágrafo com a id 'rgb-color') é igual (atribuído) o backgroundColor do elemento com a id selecionada aleatoriamente
  rgbColorText.innerText = selectedColor.style.backgroundColor;
};

// Consultei o PR da colega Sheila Nakashima para resolver o requisito 7 - somar a pontuação - Turma 19 - A link: https://github.com/tryber/sd-019-a-project-color-guess/pull/15/files
const guessColor = (event) => {
  if (event.target.style.backgroundColor === rgbColorText.innerText) {
    answer.innerText = 'Acertou!';
    answer.classList.add('answer-correct');
    score.innerText = +score.innerText + 3;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
    answer.classList.add('answer-wrong');
  }
};

const selectColor = () => {
  const colors = document.querySelectorAll('.ball');
  colors.forEach((color) => {
    color.addEventListener('click', guessColor);
  });
};

const resetGame = () => {
  answer.classList.remove('answer-correct');
  answer.classList.remove('answer-wrong');
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
