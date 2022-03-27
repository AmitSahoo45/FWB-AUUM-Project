let menuIcon = document.querySelector('.menu_icon');
let navbar = document.querySelector('.header__navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('show');

    if (!menuIcon.classList.contains('active')) {
        menuIcon.classList.toggle('not-active');
    } else {
        menuIcon.classList.remove('not-active');
    }
})