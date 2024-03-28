// Отримуємо список категорій
const categoriesList = document.querySelector('#categories');




// Виводимо кількість категорій у консоль
console.log(`Number of categories: ${categoriesList.children.length}`);

// Ітеруємося по кожній категорії та виводимо її заголовок та кількість елементів
[...categoriesList.children].forEach(category => {


  // Виводимо в консоль текст заголовка та кількість елементів у категорії
  console.log("Category:", category.firstElementChild.textContent);
  console.log("Elements:", category.lastElementChild.children.length);
});
