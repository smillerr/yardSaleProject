//Desktop menu with its selector that triggers it
const showMenu = document.querySelector('.nav-bar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//Mobile menu with its selector that triggers it
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//Shopping cart with its selector that triggers it
const shoppingCartIcon = document.querySelector('.nav-bar-cart');
const shoppingCart = document.querySelector('.my-shopping-cart');
//Catalog of products
const catalogContainer = document.querySelector('.catalog-container');
//Filter all items with its selector that triggers it
const allItems = document.querySelectorAll('.filterAll');
const showAllItems = document.getElementsByClassName('all');
//Filter only clothes items with its selector that triggers it
const showOnlyClothes = document.querySelectorAll('.filterClothes');
const clothesItems = document.getElementsByClassName('clothes');
//Filter only electronics with its selector that triggers it
const showOnlyElectronics = document.querySelectorAll('.filterElectronics');
const electronicsItems = document.getElementsByClassName('electronics');
//Filter only furniture with its selector that triggers it
const showOnlyFurniture = document.querySelectorAll('.filterFurniture');
const furnitureItems = document.getElementsByClassName('furniture');
//Filter only toys with its selector that triggers it
const showOnlyToys = document.querySelectorAll('.filterToys');
const toysItems = document.getElementsByClassName('toys');
//Filter only others with its selector that triggers it
const showOthers = document.querySelectorAll('.filterOthers');
const othersItems = document.getElementsByClassName('others');
//Selectors in which will be displayed the details of every product, depending in which one the user clicks
const productDetailImg = document.getElementById('product-detail-image');
const productDetailPrice = document.getElementById('product-detail-price');
const productDetailName = document.getElementById('product-detail-name');
const productDetailDescription = document.getElementById('product-detail-description');
//Detail of every product with its selector that triggers it
const productDetailContainer = document.querySelector('.product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
//Event listeners for the menus, shopping cart and the detail of a product
showMenu.addEventListener('click', function(){toggleElement(desktopMenu)});
burguerIcon.addEventListener('click', function(){toggleElement(mobileMenu)});
shoppingCartIcon.addEventListener('click', function(){toggleElement(shoppingCart)});
productDetailCloseIcon.addEventListener('click' , closeProductDetail);

/*Filtering the products on desktop and mobile

Since our filter buttons are on different navbars, the forEach() function is the responsible of doing it both for mobile and desktop, the same button is being used but since the navbar changes they both have the same class

*/ 

allItems.forEach(element=>element.addEventListener('click' , function(){showWhichProducts(showAllItems)}));
showOnlyClothes.forEach((element=>element.addEventListener('click' , function(){showWhichProducts(clothesItems)})));
showOnlyElectronics.forEach((element=>element.addEventListener('click' , function(){showWhichProducts(electronicsItems)})));
showOnlyFurniture.forEach((element=>element.addEventListener('click' , function(){showWhichProducts(furnitureItems)})));
showOnlyToys.forEach((element=>element.addEventListener('click' , function(){showWhichProducts(toysItems)})));
showOthers.forEach((element=>element.addEventListener('click' , function(){showWhichProducts(othersItems)})));

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
        productDetailContainer.classList.add('inactive');
    }
    else if (isElementShoppingCart){
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
    } //Mobile
    else {
        shoppingCart.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
    }
}

//This is a simulation of how it´ll be if we had a database connected to our site, 
let productsData = [];
//This would be automatic and not hardcoded
productsData = [ 
    {name: 'Bouquet', price: 8, image: 'https://images.pexels.com/photos/931180/pexels-photo-931180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'others'},
    {name: 'Sunflowers', price: 12, image: 'https://images.pexels.com/photos/112396/pexels-photo-112396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'others'},
    {name: 'Tulip Lamp', price: 20, image: 'https://cdn.shopify.com/s/files/1/0624/1969/7907/products/S86eee0745e7a4bc09fad69c90f6c7ba0Y_1445x.jpg?v=1667738943', category: 'furniture'},
    {name: 'Puff', price: 45, image: 'https://images.pexels.com/photos/6368796/pexels-photo-6368796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'furniture'},
    {name: 'Unicorn Plush', price: 15, image: 'https://images.pexels.com/photos/4887163/pexels-photo-4887163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'toys'},
    {name: 'Dinosaurs', price: 25, image: 'https://images.pexels.com/photos/8014604/pexels-photo-8014604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'toys'},
    {name: '9 Lego set', price: 22, image: 'https://images.pexels.com/photos/3806754/pexels-photo-3806754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'toys'},
    {name: 'Dragon', price: 35, image: 'https://images.pexels.com/photos/5366443/pexels-photo-5366443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'toys'},
    {name: 'Roses', price: 20, image: 'https://images.pexels.com/photos/2300713/pexels-photo-2300713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'others'},
    {name: 'Drone', price: 300, image: 'https://images.pexels.com/photos/319968/pexels-photo-319968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'electronics'},
    {name: 'Rode mic', price: 125, image: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'electronics'},
    {name: 'Radio', price: 70, image: 'https://images.pexels.com/photos/6368899/pexels-photo-6368899.jpeg', category: 'electronics'},
    {name: 'Blue tie', price: 18, image: 'https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'clothes'},
    {name: 'Triangular Bookshelf', price: 42, image: 'https://images.pexels.com/photos/2228583/pexels-photo-2228583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'furniture'},
    {name: 'Cat Playground', price: 55, image: 'https://images.pexels.com/photos/7726077/pexels-photo-7726077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'furniture'},
    {name: 'Red converse', price: 75, image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'clothes'},
    {name: 'Blue Yeezys', price: 90, image: 'https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'clothes'},
    {name: 'Wooden Elephants Set', price: 14, image: 'https://images.pexels.com/photos/6219109/pexels-photo-6219109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'toys'},
    {name: '3D Stick Man', price: 16, image: 'https://images.pexels.com/photos/12266785/pexels-photo-12266785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'toys'},
    {name: 'Camera', price: 200, image: 'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'electronics'},
    {name: 'Acustic Guitar', price: 700, image: 'https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'others'},
    {name: 'Electric Guitar', price: 1000, image: 'https://images.pexels.com/photos/92069/pexels-photo-92069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'others'},
    {name: 'Crosley Turntable', price: 350, image: 'https://images.pexels.com/photos/775414/pexels-photo-775414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'others'},
    {name: 'Pinkgold Apple Watch', price: 600, image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'electronics'},
    {name: 'Samsung Fridge', price: 1000, image: 'https://electroferia.com/wp-content/uploads/2022/04/2-NEVERA-SAMSUNG-RL4363SBABS.jpg', category: 'electronics'},
]
//We create the array where our products would be
const productList = [];
//And then we add the products of our database into the array that will be displayed on our e-commerce
for (data of productsData){
    productList.push(data);
}
//We display those products so our users are avaliable to interact with them
renderProducts(productList);
//For each product we create it's product card, with the name, the price and an image
function renderProducts(productList){
    for (product of productList){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const productImg = document.createElement('img');
        productImg.setAttribute('src' , product.image);
        //We create the variable parameter in order to being able to sent it into the function openProductDetail, since this parameter is going through the whole array of products, if we don´t create it, it would just pick the last item of the product list
        let parameter = product;
        productImg.addEventListener('click' , function(){openProductDetail(parameter);});
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
        //We give our product the style cursor: pointer, because this component will display the details of every product
        productImg.style.cursor = 'pointer';
        productCard.classList.add(product.category);
    }
}

//Its parameter is an document.getElementsByClassName, in other words a HTML collection
function showWhichProducts(elementsWithCategory){
    //Every time we filter a new product, if a product detail is being displayed, we close it
    productDetailContainer.classList.add('inactive'); 
    //In case we want to filter all products, we go through every single category and then we remove the 'inactive' class
    if (elementsWithCategory.length===0){
        for (other of othersItems){
            other.classList.remove('inactive');
        }
        for (toy of toysItems){
            toy.classList.remove('inactive');
        }
        for (furniture of furnitureItems){
            furniture.classList.remove('inactive');
        }
        for (cloth of clothesItems){
            cloth.classList.remove('inactive');
        }
        for (electronic of electronicsItems){
            electronic.classList.remove('inactive');
        }
    }
    //Going through all the products that have the category that we want to filter
    for (item of elementsWithCategory){
        //verifyCategory give us the classList of the product of the selected category, its default class is product card, the other one is the one that we'll filter
        let verifyCategory = item.classList.value;
        
        //
        if (verifyCategory.includes('clothes')){
            for (cloth of clothesItems){
                cloth.classList.remove('inactive');
            }
            for (other of othersItems){
                other.classList.add('inactive');
            }
            for (toy of toysItems){
                toy.classList.add('inactive');
            }
            for (furniture of furnitureItems){
                furniture.classList.add('inactive');
            }
            for (electronic of electronicsItems){
                electronic.classList.add('inactive');
            } 
        } else if (verifyCategory.includes('electronics')){
            for (electronic of electronicsItems){
                electronic.classList.remove('inactive')
            }
            for (other of othersItems){
                other.classList.add('inactive');
            }
            for (toy of toysItems){
                toy.classList.add('inactive');
            }
            for (furniture of furnitureItems){
                furniture.classList.add('inactive');
            }
            for (cloth of clothesItems){
                cloth.classList.add('inactive');
            }
        } else if (verifyCategory.includes('toys')){
            for (toy of toysItems){
                toy.classList.remove('inactive');
            }
            for (other of othersItems){
                other.classList.add('inactive');
            }
            for (furniture of furnitureItems){
                furniture.classList.add('inactive');
            }
            for (cloth of clothesItems){
                cloth.classList.add('inactive');
            }
            for (electronic of electronicsItems){
                electronic.classList.add('inactive');
            }
        } else if (verifyCategory.includes('furniture')){
            for (furniture of furnitureItems){
                furniture.classList.remove('inactive');
            }
            for (other of othersItems){
                other.classList.add('inactive');
            }
            for (toy of toysItems){
                toy.classList.add('inactive');
            }
            for (electronic of electronicsItems){
                electronic.classList.add('inactive');
            }
            for (cloth of clothesItems){
                cloth.classList.add('inactive');
            }
        } else if (verifyCategory.includes('others')){
            for (other of othersItems){
                other.classList.remove('inactive');
            }
            for (toy of toysItems){
                toy.classList.add('inactive');
            }
            for (furniture of furnitureItems){
                furniture.classList.add('inactive');
            }
            for (cloth of clothesItems){
                cloth.classList.add('inactive');
            }
            for (electronic of electronicsItems){
                electronic.classList.add('inactive');
            } 
        } 
    }  
}

function openProductDetail(product){
    //This is because when we are displaying a single product detail and information, the shopping cart, desktop menu and mobile menu become invisible, in other words, you can´t display the detail of a product and your respective menu or shopping cart at the same time
    productDetailContainer.classList.remove('inactive');
    shoppingCart.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');

    //Now let's customize each product detail so it matches the one we are clicking 
    console.log(product.image);
    productDetailImg.setAttribute('src' , product.image );
    productDetailPrice.innerText = `$${product.price},00`;
    productDetailName.innerText = product.name;
    productDetailDescription.innerText = 'The description of this product will be avaliable soon';
    
}
function closeProductDetail(){
    productDetailContainer.classList.add('inactive');
    
}

