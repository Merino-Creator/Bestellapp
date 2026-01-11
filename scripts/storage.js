function saveToLocalStorage() {
    localStorage.setItem("basket", JSON.stringify(basket));
}

function getFromLocalStorage() {
    let newBasket = JSON.parse(localStorage.getItem("basket"));

    if (newBasket) {
        basket = newBasket;
    }
}