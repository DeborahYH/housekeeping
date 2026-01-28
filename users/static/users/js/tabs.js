const buttons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {

        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        contents[index].classList.add('active');
    });
});