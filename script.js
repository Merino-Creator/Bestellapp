function init() {
    getFromLocalStorage();
    renderBurgerMenu();
    renderPizzaMenu();
    renderSaladMenu();
    renderBasket();
    updateCartBadge();
}

function renderBurgerMenu() {
    let contentRef = document.getElementById('burgerMenu')
    contentRef.innerHTML = "";

    let burgers = dishes[0].burger;

    for (let indexBurger = 0; indexBurger < burgers.length; indexBurger++) {
        contentRef.innerHTML += getBurgerMenuTemplate(indexBurger);
    }
}

function renderPizzaMenu() {
    let contentRef = document.getElementById('pizzaMenu')
    contentRef.innerHTML = "";

    let pizzas = dishes[1].pizza;

    for (let indexPizza = 0; indexPizza < pizzas.length; indexPizza++) {
        contentRef.innerHTML += getPizzaMenuTemplate(indexPizza);
    }
}

function renderSaladMenu() {
    let contentRef = document.getElementById('saladMenu')
    contentRef.innerHTML = "";

    let salads = dishes[2].salad;

    for (let indexSalad = 0; indexSalad < salads.length; indexSalad++) {
        contentRef.innerHTML += getSaladMenuTemplate(indexSalad);
    }
}

function toggleMenu(x) {
    x.classList.toggle("change");
}