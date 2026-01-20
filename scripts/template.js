const dishMap = {
    burger: dishes[0].burger,
    pizza: dishes[1].pizza,
    salad: dishes[2].salad
};

function getMenuTemplate(type, index) {
    const dish = dishMap[type][index];

    return `
        <div class="menu_wrapper">
            <div class="dishes_container">
                <img class="menu_images" src="${dish.image}" alt="${dish.name}">
                <div class="dishes_content">
                    <div class="dishes_text">
                        <h4>${dish.name}</h4>
                        <p>${dish.description}</p>
                    </div>
                    <div class="dishes_btn">
                        <h4>${dish.price.toFixed(2)}€</h4>
                        <button class="add_btn" onclick="addToCart(${index}, '${type}')">
                            Add to basket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getBasketItemTemplate(item, indexBasket) {
    const isMultiple = item.amount >= 2;

    return `
        <div class="basket_item">
            <div id="basket_item_header">
                <h5>${item.name}</h5>

                ${isMultiple ? `
                    <button class="basket_button trash" onclick="removeFromBasket(${indexBasket})">
                        <img src="./assets/icons/trashcan.png" alt="trash">
                    </button>
                ` : ''}
            </div>

            <div class="amount_price_container">
                <div class="basket_quantity">
                    ${isMultiple ? `
                        <button class="basket_button" onclick="decreaseAmount(${indexBasket})">−</button>
                    ` : `
                        <button class="basket_button" onclick="removeFromBasket(${indexBasket})">
                            <img src="./assets/icons/trashcan.png" alt="trash">
                        </button>
                    `}

                    <h5>${item.amount}</h5>

                    <button class="basket_button" onclick="addMore(${indexBasket})">+</button>
                </div>

                <h5>${item.price.toFixed(2)}€</h5>
            </div>
        </div>
    `;
}