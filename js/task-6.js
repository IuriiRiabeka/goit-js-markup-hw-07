const controls = document.querySelector('#controls');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = parseInt(controls.input.value);
  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  destroyBoxes(); // Очищаємо попередні елементи перед створенням нових

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('#boxes');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }

  input.value = ''; // Очищаємо значення input
}

function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Очищаємо всі дочірні елементи div#boxes
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}