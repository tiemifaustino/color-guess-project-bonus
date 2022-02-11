const colorContainer = document.querySelector('#color-container');

const addColor = () => {
  for (let index = 0; index < 6; index += 1) {
    const divColor = document.createElement('div');
    divColor.className = 'ball';
    colorContainer.appendChild(divColor);
  }
};

addColor();
