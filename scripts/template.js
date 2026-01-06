function getBurgerMenuTemplate(indexBurger) {
    let burger = dishes[0].burger[indexBurger];

    return `
        <div class="dishes_container">
            <img class="menu_images" src="${burger.image}" alt="${burger.name}">
            <div class="dishes_content">
                <div class="dishes_text">
                    <h4>${burger.name}</h4>
                    <p>${burger.description}</p>
                </div>
                <div class="dishes_btn">
                    <h4>${burger.price.toFixed(2)}€</h4>
                    <button class="add_btn" onclick="addToCart(${indexBurger}, 'burger')">Add to basket</button>
                </div>
            </div>
        </div>`
}

function getPizzaMenuTemplate(indexPizza) {
    let pizza = dishes[1].pizza[indexPizza]

    return `
        <div class="dishes_container">
            <img class="menu_images" src="${pizza.image}" alt="${pizza.name}">
            <div class="dishes_content">
                <div class="dishes_text">
                    <h4>${pizza.name}</h4>
                    <p>${pizza.description}</p>
                </div>
                <div class="dishes_btn">
                    <h4>${pizza.price.toFixed(2)}€</h4>
                    <button class="add_btn" onclick="addToCart(${indexPizza}, 'pizza')">Add to basket</button>
                </div>
            </div>
        </div>`
}

function getSaladMenuTemplate(indexSalad) {
    let salad = dishes[2].salad[indexSalad]

    return `
        <div class="dishes_container">
            <img class="menu_images" src="${salad.image}" alt="${salad.name}">
            <div class="dishes_content">
                <div class="dishes_text">
                    <h4>${salad.name}</h4>
                    <p>${salad.description}</p>
                </div>
                <div class="dishes_btn">
                    <h4>${salad.price.toFixed(2)}€</h4>
                    <button class="add_btn" onclick="addToCart(${indexSalad}, 'salad')">Add to basket</button>
                </div>
            </div>
        </div>`
}

function getBasketItemTemplate(item, indexBasket) {
    return `
        <div class="basket_item">
            <div>
                <h5>${item.name}</h5>
            </div>
            <div class="amount_price_container">
                <div class="basket_quantity">
                    <button class="basket_button" onclick="removeFromBasket()"><img src="/assets/icons/trashcan.png" alt="small trashcan"></button>
                    <p>amount</p>
                    <button class="basket_button" onclick="addMore()">+</button>
                </div>
                <h5>${item.price.toFixed(2)}€</h5>
            </div>
        </div>
    `;
}