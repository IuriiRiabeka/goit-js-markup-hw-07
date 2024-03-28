const input = document.querySelector('#controls').firstElementChild;
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', () => createBoxes(parseInt(input.value)));
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  destroyBoxes(); // Очищаємо попередні елементи перед створенням нових

  let size = 30;
  const boxesArray = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArray.push(box);
    size += 10;
  }
  boxesContainer.append(...boxesArray);

  input.value = ''; // Очищаємо значення input
}

function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Очищаємо всі дочірні елементи div#boxes
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}




