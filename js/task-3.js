// Отримуємо посилання на елементи інпуту та спана
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

// Додаємо обробник події input до інпуту
input.addEventListener('input', event => {
  // Отримуємо поточне значення інпуту
  const inputValue = event.target.value.trim(); // Очищаємо від пробілів по краях

  // Перевіряємо, чи інпут не порожній та не містить лише пробіли
  if (inputValue.length > 0) {
    // Якщо так, встановлюємо значення з інпуту у спан
    output.textContent = inputValue;
  } else {
    // Якщо інпут порожній або містить лише пробіли, встановлюємо "Anonymous"
    output.textContent = 'Anonymous';
  }
});
