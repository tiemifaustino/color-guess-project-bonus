const colorContainer = document.querySelector('#color-container');

// Consultei o PR da colega Tamiris Shigaki para resolver o requisito 3 - Turma 19 - A link: https://github.com/tryber/sd-019-a-project-color-guess/pull/23/files
const addColor = () => {
  for (let index = 0; index < 6; index += 1) {
    const divColor = document.createElement('div');
    divColor.className = 'ball';
    divColor.style.backgroundColor = `#${(Math.floor(Math.random() * 1000000))}`;
    colorContainer.appendChild(divColor);
  }
};

window.onload = () => {
  addColor();
};
