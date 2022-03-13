const burger = document.querySelector("#burger");
const burgerMenu = document.querySelector("#burgerMenu");

burger.addEventListener("click", handleBurgerMenu);


function handleBurgerMenu() {
    if (burgerMenu.classList.contains("activeBurgerMenu")) {
        burgerMenu.style.clipPath = "inset(0 0 77vh 0)";
        burgerMenu.classList.toggle("activeBurgerMenu");
    }
    else {
        burgerMenu.style.clipPath = "inset(0 0 0 0)";
        burgerMenu.classList.toggle("activeBurgerMenu");
    }
}