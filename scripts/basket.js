function addToCart(indexDish, category) {
    let dish = null;

    for (let indexDish = 0; indexDish < dishes.length; indexDish++) {
        if (dishes[indexDish][category]) {
            dish = dishes[indexDish][category];
            break;
        }
    }

    let item = dish[indexDish];
    basket.push(item);

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
}