const form = document.querySelector('.login-form');

form.addEventListener('submit', loginUser);

function loginUser(e) {
    e.preventDefault();

    // Отримання значень полів форми
    const email = e.currentTarget.elements.email.value.trim();
    const password = e.currentTarget.elements.password.value.trim();

    // Перевірка наявності заповнених полів
    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }

    // Створення об'єкта з даними форми
    const formData = {
        email: email,
        password: password
    };

    // Виведення об'єкта з даними в консоль
    console.log(formData);

    // Очищення значень полів форми
    e.currentTarget.reset();

}