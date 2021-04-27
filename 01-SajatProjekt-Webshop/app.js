// Modern javascript - plain / vanilla.js tanulása 2021

// 1. Oldalsó menü kezelése ************************************************
// Melyik elemet akarjuk figyelni -> burger:
const burger = document.getElementById('burger');
// -> amire rákattintunk => amire hatunk - menu-active classt akarunk rátenni:
const nav = document.getElementById('nav');

// burgert figyelnünk kell, hogy ráklikkelnek -e -> addEventListener metódus:
burger.addEventListener('click', function (event) {
    nav.classList.toggle('menu-active');
    burger.classList.toggle('fi-align-justify');
    burger.classList.toggle('fi-arrow-left');
});


// 2. Termékek beillesztése : Adattömb létrehozása -> termékek feltöltése ****
// Termékek: ez általában egy backendről jön, de most ehelyett egy products nevű objektumokból álló tömböt hozunk létre:
// TODO json-ről hívjuk le a products-ot
// GET
// https://hur.webmania.cc/products.json

let products = [];

// TODO inStock

const productsSection = document.getElementById('products');


// adatok behívása:
fetch ('https://hur.webmania.cc/products.json')
.then(response => response.json())
.then(data => {
    // forEach -> functiont hozok létre, amibe az innerHTML-lel kiiratom a termékeket:
    products = data.products
        products.forEach(product => {
            productsSection.innerHTML += `<div>
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <img src="${product.picture}">
            <span>${product.stock}</span>
            <h3>${product.price}</h3>
            <a id="${product.id}" class="addToCart">Kosárba</a>
            </div>`

            // *** 5. Létrehozzuk az addToCart függvényt - vége *****************************

            // -> gyűjtsük ki az addToCart css class-ú elemeket
            const addToCartButtons = document.getElementsByClassName('addToCart')

            // cart[] -ba akarjuk belevarázsolni a for segítségével -> (event)-ből kellene nekünk, hogy mire kattintottunk rá(target)

            // -> nézzük meg, hogy hány darab van belőle:
            const buttonCount = addToCartButtons.length;
            // -> lépegessünk végig rajta:
            for (let i = 0; i < buttonCount; i++) {
                    // -> adjunk hozzájuk egyesével egy click figyelőt:
                addToCartButtons[i].addEventListener('click', addToCart)
            }

            
})
})
.catch(error => console.error(error))



// 3. Kosár kezelése ********************************************************

// const cart = {12: 1}  - objektumba mentjük a kosár tartalmát: {id : darabszám}
const cart = {};

// *** 5. Létrehozzuk az addToCart függvényt - kezdete ***************************

const addToCart = (event) => {
// TODO Logikai vizsgálat: nézzük meg, hogy a kosárba gombot nyomtuk meg (van id), vagy a plusz gombot(nincs id)
/* egyik módszer : if
let target = event.target.dataset.id
if (event.target.id) {
    target = event.target.id
} */
// másik módszer : ternary operator
let target = event.target.id ? event.target.id : event.target.dataset.id

    // -> HA még nincs benne a kosárban, akkor adjunk hozzá 1 darabbal:
    if (cart[target] == undefined) {
        cart[target] = 1;
    } else {
        // -> HA már benne van, akkor növeljük meg a darabszámot:
        cart[target]++;
    }
}

const refreshCartItems = () => {
// jelenlegi cart-items tartalom kiürítése
cartItems.innerHTML = ''
// lenullázás:
let total = 0
// lépegessünk végig a cart-on és a products tömbből keressük ki a szóban forgó terméket 
for (const id in cart) {
 // Így tudjuk kiírni a kosár tartalmát:   console.log(id, cart[id])
// és jelenítsük meg a nevét, a cart-ban lévő darabszámot és a termék árát
const currentProduct = products.find(product => product.id == id)
cartItems.innerHTML += `<li>
<button data-id="${currentProduct.id}">+</button>
${cart[id]} db - ${currentProduct.name} * ${currentProduct.price} Ft/db</li>`
//  console.log(products.find(product => product.id == id).name) // ez kikeresi a vásárolt terméket és kiírja az adatait a tömbből
//   console.log(cart[id])
//  console.log(products.find(product => product.id == id).price) // ez kikeresi a vásárolt terméket és kiírja a termék árát a tömbből
//  adjunk hozzá ennek az értékét a teljes összeghez
total += currentProduct.price * cart[id]
}
// a végén jelenítsük meg a teljes vásárlási összeget

cartItems.innerHTML += `<li>Összesen: ${total.toLocaleString()} Ft</li>`
}



// 4. Kosár kiírása -> Tegyünk rá egy klikkfigyelőt a kosár ikonra *******************
const cartIcon = document.getElementById('cart-icon')
const cartContent = document.getElementById('cart-content')
const cartItems = document.getElementById('cart-items')

cartIcon.addEventListener('click', function () {
    // jelenítsük meg, ami a kosárban van
    cartContent.classList.toggle('active');
refreshCartItems()
})

// Tegyük rá a "+" gombokra a klikkfigyelőt a kosárba helyezéssel
// event delegation
cartItems.addEventListener('click', (event) => {
addToCart(event)
refreshCartItems()
})
// const plusButtons = document.querySelectorAll('#cart-items button')
// plusButtons.addEventListener()



// TODO Függvények ELMÉLET
//  FAT ARROW
const addToCartTest = () => {
    console.log('addToCartTest függvény futása')
    // ide jön a többi
}

// Hagyományos