const showMenu = document.querySelector('.nav-bar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burguerIcon = document.querySelector('.menu');
const shoppingCart = document.querySelector('.my-shopping-cart');
const shoppingCartIcon = document.querySelector('.nav-bar-cart');
const catalogContainer = document.querySelector('.catalog-container');


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

//This is a simulation of how it´ll be if we had a database connected to our site, 
let productsData = [];
//This would be automatic and not hardcoded
productsData = [ 
    {name: 'Bouquet', price: 8, image: 'https://images.pexels.com/photos/931180/pexels-photo-931180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'others'},
    {name: 'Sunflowers', price: 12, image: 'https://images.pexels.com/photos/112396/pexels-photo-112396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'others'},
    {name: 'Tulip Lamp', price: 20, image: 'https://cdn.shopify.com/s/files/1/0624/1969/7907/products/S86eee0745e7a4bc09fad69c90f6c7ba0Y_1445x.jpg?v=1667738943', category: 'furnitures'},
    {name: 'Puff', price: 45, image: 'https://images.pexels.com/photos/6368796/pexels-photo-6368796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'furnitures'},
    {name: 'Unicorn Plush', price: 15, image: 'https://images.pexels.com/photos/4887163/pexels-photo-4887163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'toys'},
    {name: 'Dinosaurs', price: 25, image: 'https://images.pexels.com/photos/8014604/pexels-photo-8014604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'toys'},
    {name: '9 Lego set', price: 22, image: 'https://images.pexels.com/photos/3806754/pexels-photo-3806754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'toys'},
    {name: 'Dragon', price: 35, image: 'https://images.pexels.com/photos/5366443/pexels-photo-5366443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'toys'},
    {name: 'Roses', price: 20, image: 'https://images.pexels.com/photos/2300713/pexels-photo-2300713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'others'},
    {name: 'Drone', price: 300, image: 'https://images.pexels.com/photos/319968/pexels-photo-319968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'electronics'},
    {name: 'Rode mic', price: 125, image: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'electronics'},
    {name: 'Radio', price: 70, image: 'https://images.pexels.com/photos/6368899/pexels-photo-6368899.jpeg', category: 'electronics'},
    {name: 'Blue tie', price: 18, image: 'https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'clothes'},
]

const productList = [];

for (data of productsData){
    productList.push(data);
}

renderProducts(productList);

function renderProducts(productList){

    for (product of productList){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const productImg = document.createElement('img');
        productImg.setAttribute('src' , product.image);
        const productDescription = document.createElement('div');
        productDescription.classList.add('product-description');

        

        const productDescriptionDiv = document.createElement('div');
        const productName = document.createElement('p');
        productName.innerText = product.name;
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price},00`;

        

        const productFigure = document.createElement('figure');
        const productImgCart= document.createElement('img');
        productImgCart.setAttribute('src', './Icons/bt_add_to_cart.svg');

        productFigure.append(productImgCart);
        productDescriptionDiv.append(productName , productPrice);
        productDescription.append(productDescriptionDiv,productFigure);
        productCard.append(productImg,productDescription);
        catalogContainer.append(productCard);
        productCard.style.cursor = 'pointer';
        productCard.classList.add(product.category);
    }
}
