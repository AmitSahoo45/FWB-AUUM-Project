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



const productImage = document.querySelector('.product__img')
const changeImg = (id) => {
    document.querySelectorAll('.img__holder').forEach(holder => {
        holder.classList.remove('img__selected')
    })
    switch (id) {
        case 'i01':
            productImage.src = '/img/swanser-1.png';
            document.getElementById(id).classList.add('img__selected');
            break;
        case 'i02':
            productImage.src = '/img/swanser-2.png'
            document.getElementById(id).classList.add('img__selected');
            break;
        case 'i03':
            productImage.src = '/img/swanser-3.png'
            document.getElementById(id).classList.add('img__selected');
            break;
        case 'i04':
            productImage.src = '/img/swanser-4.png'
            document.getElementById(id).classList.add('img__selected');
            break;
    }
}