const showMenu = document.querySelector('.nav-bar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burguerIcon = document.querySelector('.menu');
const shoppingCart = document.querySelector('.my-shopping-cart');
const shoppingCartIcon = document.querySelector('.nav-bar-cart');


showMenu.addEventListener('click', function(){toggleElement(desktopMenu)});
burguerIcon.addEventListener('click', function(){toggleElement(mobileMenu)});
shoppingCartIcon.addEventListener('click', function(){toggleElement(shoppingCart)});

//Function to show or hide the chosen element
function toggleElement(element){
    element.classList.toggle('inactive');
    //Checking if the element that we are clicking is to open the desktop menu
    const isElementDesktopMenu = element === desktopMenu;
    //Checking if the element that we are clicking is to open the shopping cart
    const isElementShoppingCart = element === shoppingCart;
    /*I'm not checking the mobile part because in the if conditional, in case we are not selecting the desktop menu or the shopping cart it is because we are selecting the mobile menu
    The reason of this is to not being able to show both the menu and the shopping cart at the same time*/
    if(isElementDesktopMenu){
        shoppingCart.classList.add('inactive');
    }
    else if (isElementShoppingCart){
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
    } //Mobile
    else {
        shoppingCart.classList.add('inactive');
    }
}