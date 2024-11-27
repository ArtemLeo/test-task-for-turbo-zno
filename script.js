document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!email.includes('@')) {
        alert("Будь ласка, введіть коректний e-mail.");
        return;
    }

    alert(`Дякуємо, ${name}, за реєстрацію! Ми зв'яжемося з вами найближчим часом.`);

    // Очищуємо форму після успішної реєстрації
    document.getElementById('signup-form').reset();
});
