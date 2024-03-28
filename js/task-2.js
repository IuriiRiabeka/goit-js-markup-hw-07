const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Отримуємо список галереї
const galleryList = document.querySelector('.gallery');



// Ітеруємося по кожному об'єкту у масиві images
const listItemArray = images.map(image => {
  // Створюємо новий елемент li для кожного зображення
  const listItem = document.createElement('li');
  listItem.classList.add('gallery-item'); // Додаємо клас для оформлення за допомогою CSS

  // Створюємо новий елемент img
  const img = document.createElement('img');
  img.src = image.url; // Встановлюємо посилання на зображення
  img.alt = image.alt; // Встановлюємо альтернативний текст
  img.style.width = "360px";
  img.style.height = "300px";
  // Додаємо зображення в елемент li
  listItem.appendChild(img);

  // Додаємо елемент li з зображенням до фрагменту
  return listItem;
});

// Додаємо всі елементи галереї з фрагменту в список галереї
galleryList.append(...listItemArray);