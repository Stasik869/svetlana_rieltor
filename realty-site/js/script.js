// js/script.js

// Плавная прокрутка для всех ссылок с якорем
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Отключаем стандартный переход

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth', // Плавно
                block: 'start'
            });
        }
    });
});