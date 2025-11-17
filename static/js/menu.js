const hamburgerBtn = document.getElementById('icon-hamburger');
const accordionMenu = document.querySelector('.accordion-menu');
const closeMenuBtn = document.getElementById('icon-close');

hamburgerBtn.addEventListener('click', () => {
    accordionMenu.classList.add('active');
});

closeMenuBtn.addEventListener('click', () => {
    accordionMenu.classList.remove('active');
});

document.querySelectorAll('.submenu-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
    btn.nextElementSibling.classList.toggle('active');
    });
});

document.querySelectorAll('.menu-item').forEach(item => {
    const dropdown = item.querySelector('.dropdown');
    let timer;

    item.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        dropdown.classList.add('show');
    });

    item.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
            dropdown.classList.remove('show');
        }, 150); // 150ms de atraso
    });
});