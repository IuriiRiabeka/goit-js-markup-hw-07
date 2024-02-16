// Отримуємо список категорій
const categoriesList = document.querySelector('#categories');

// Отримуємо всі елементи li з класом 'item' у списку категорій
const categoriesItems = categoriesList.querySelectorAll('li.item');

// Виводимо кількість категорій у консоль
console.log(`Number of categories: ${categoriesItems.length}`);

// Ітеруємося по кожній категорії та виводимо її заголовок та кількість елементів
categoriesItems.forEach(category => {
  // Отримуємо текст заголовка категорії (тег <h2>)
  const categoryTitle = category.querySelector('h2').textContent;

  // Отримуємо всі елементи <li> у поточній категорії
  const categoryItems = category.querySelectorAll('li');

  // Виводимо в консоль текст заголовка та кількість елементів у категорії
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});