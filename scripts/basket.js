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

    saveToLocalStorage();
    renderBasket();
}

function renderBasket() {
    let basketRef = document.getElementById('products');
    basketRef.innerHTML = "";

    let isEmpty = basket.length === 0;
    let basketImg = document.getElementById('basketImage');
    let basketSum = document.getElementById('basketSummary');

    if (!isEmpty) {
        for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
            basketRef.innerHTML += getBasketItemTemplate(basket[indexBasket], indexBasket);
        }
        basketSummary();
    }

    basketImg.classList.toggle("d_none", !isEmpty);
    basketSum.classList.toggle("d_none", isEmpty);
}

function addMore(indexBasket) {
    basket[indexBasket].amount++;

    saveToLocalStorage();
    renderBasket();
}

function decreaseAmount(indexBasket) {
    if (basket[indexBasket].amount > 1) {
        basket[indexBasket].amount--;
    }

    saveToLocalStorage();
    renderBasket();
}

function removeFromBasket(indexBasket) {
    basket.splice(indexBasket, 1);

    saveToLocalStorage();
    renderBasket();
}

function basketSummary() {
    let deliveryFee = 4.99;

    let subtotal = basket.reduce((sum, item)=> sum + (item.price * item.amount), 0);

    let total = subtotal + deliveryFee;

    document.getElementById('subtotalAmount').innerText = subtotal.toFixed(2) + '€';
    document.getElementById('totalAmount').innerText = total.toFixed(2) + '€';
    document.getElementById('buyButton').innerText = 'Buy now (' + total.toFixed(2) + '€)';
}

function sendOrder() {
    let dialog = document.getElementById('orderDialog');

    dialog.showModal();

    setTimeout(() => {
        if (dialog.open) {
            dialog.close();
        }
    }, 5000);

    clearBasket();

}

function closeDialog() {
    document.getElementById("orderDialog").close();
}

function clearBasket() {
    basket = [];

    localStorage.removeItem("basket");
    renderBasket();
}