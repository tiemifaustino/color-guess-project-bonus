const colorContainer = document.querySelector('#color-container');

// Consultei o PR da colega Tamiris Shigaki para resolver o requisito 3 - Turma 19 - A link: https://github.com/tryber/sd-019-a-project-color-guess/pull/23/files
const addColor = () => {
  for (let index = 1; index < 7; index += 1) {
    const divColor = document.createElement('div');
    divColor.id = `color${index}`;
    divColor.className = 'ball';
    divColor.style.backgroundColor = `#${(Math.floor(Math.random() * 1000000))}`;
    colorContainer.appendChild(divColor);
  }
};

// Consultei o PR da colega Sheila Nakashima para resolver o requisito 4 - Turma 19 - A link: https://github.com/tryber/sd-019-a-project-color-guess/pull/15/files
const createGuessText = () => {
  // Seleciona o parágrafo com a id 'rgb-color'
  const rgbColorText = document.getElementById('rgb-color');
  // Gera um número aleatório de 1 a 6 - soma 1 para não resultar em zero
  const colorNumber = (Math.floor(Math.random() * 6 + 1));
  // A cor selecionada aleatoriamente vai ser a id do elemento ex. color1
  const selectedColor = document.querySelector(`#color${colorNumber}`);
  // O texto do elemento rgb é igual (atribuído) o backgroundColor do elemento com a id selecionada
  rgbColorText.innerText = selectedColor.style.backgroundColor;
};

const text = Math.floor(Math.random() * 6 + 1);

console.log(text);

window.onload = () => {
  addColor();
  createGuessText();
};
