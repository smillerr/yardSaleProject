const showMenu = document.querySelector('.nav-bar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burguerIcon = document.querySelector('.menu');


showMenu.addEventListener('click', function(){toggleElement(desktopMenu)});
burguerIcon.addEventListener('click', function(){toggleElement(mobileMenu)});

function toggleElement(elemento){
    elemento.classList.toggle('inactive');
}