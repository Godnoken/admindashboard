const burger = document.querySelector("#burger");
const burgerMenu = document.querySelector("#burgerMenu");
const navMenuItems = document.querySelectorAll(".navMenuItem");
const projectsContainer = document.querySelector("#projectsContainer");
const trendingContainer = document.querySelector("#trendingContainer");
const communitiesButton = document.querySelector("#communities");

burger.addEventListener("click", handleBurgerMenu);
navMenuItems.forEach(item => item.addEventListener("click", (event) => { handleBurgerMenu(); handleContainers(event); }))

// Shows/hides menu
function handleBurgerMenu() {
    if (burgerMenu.classList.contains("activeBurgerMenu")) {
        burgerMenu.style.clipPath = "inset(0 0 100% 0)";
        burgerMenu.classList.toggle("activeBurgerMenu");
    }
    else {
        burgerMenu.style.clipPath = "inset(0 0 0 0)";
        burgerMenu.classList.toggle("activeBurgerMenu");
    }
}


// Shows/hides containers
function handleContainers(event) {
    const containerClass = event.target.dataset.class;
    const activeContainer = document.querySelector(".activeContainer");
    const newActiveContainer = document.querySelector("#" + containerClass);

    window.scrollTo(0, 0);

    if (containerClass !== undefined && activeContainer !== newActiveContainer) {
        activeContainer.style.display = "none";
        activeContainer.classList.remove("activeContainer");
    
        newActiveContainer.style.display = "block";
        newActiveContainer.classList.add("activeContainer");
    }
}