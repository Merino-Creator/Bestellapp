function getDishByCategory(category, indexDish) {
    for (let i = 0; i < dishes.length; i++) {
        if (dishes[i][category]) {
            return dishes[i][category][indexDish];
        }
    }
}

function addToCart(indexDish, category) {
    let selectedDish = getDishByCategory(category, indexDish);
    let basketItem = basket.find(item => item.name === selectedDish.name);

    if (basketItem) {
        basketItem.amount++;
    } else {
        basket.push({
            name: selectedDish.name,
            price: selectedDish.price,
            image: selectedDish.image,
            amount: 1
        });
    }

    renderBasket();
}

function renderBasket() {
    let basketRef = document.getElementById('products');
    basketRef.innerHTML = "";

    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        basketRef.innerHTML += getBasketItemTemplate(basket[indexBasket], indexBasket);
    }

    let basketImg = document.getElementById('basketImage');
    basketImg.classList.add("d_none");

    let basketSum = document.getElementById('basketSummary');
    basketSum.classList.remove("d_none");

    basketSummary();
}

function addMore(indexBasket) {
    basket[indexBasket].amount++;
    renderBasket();
}

function removeFromBasket(indexBasket) {
    basket.splice(indexBasket, 1);
    renderBasket();
}

function basketSummary() {
    let deliveryFee = 4.99;

    let subtotal = basket.reduce((sum, item)=> sum + (item.price * item.amount), 0);

    total = subtotal + deliveryFee;

    document.getElementById('subtotalAmount').innerText = subtotal.toFixed(2) + '€';
    document.getElementById('totalAmount').innerText = total.toFixed(2) + '€';
}