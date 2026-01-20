function init() {
    getFromLocalStorage();
    renderMenu('burger', 'burgerMenu');
    renderMenu('pizza', 'pizzaMenu');
    renderMenu('salad', 'saladMenu');
    renderBasket();
    updateCartBadge();
}

function renderMenu(type, containerId) {
    let contentRef = document.getElementById(containerId)
    contentRef.innerHTML = "";

    let items = dishMap[type];

    for (let i = 0; i < items.length; i++) {
        contentRef.innerHTML += getMenuTemplate(type, i);
    }
}

function toggleMenu(x) {
    x.classList.toggle("change");
}