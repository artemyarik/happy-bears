let column = document.querySelector('.column');
let openPopupButtons = document.querySelectorAll('.column');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((column) => {
    column.addEventListener('click', (e) => {
        e.preventDefault();
        column.classList.add('active');
    })
});

closePopupButton.addEventListener('click',() => {
    column.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        column.classList.remove('active');
    }
});