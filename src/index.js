const burger = document.querySelector("#burger");
const burgerMenu = document.querySelector("#burgerMenu");
const navMenuItems = document.querySelectorAll(".navMenuItem");
const projectsContainer = document.querySelector("#projectsContainer");
const trendingContainer = document.querySelector("#trendingContainer");
const communitiesButton = document.querySelector("#communities");
const darkLightSwitch = document.querySelector("#darkLight");

burger.addEventListener("click", handleBurgerMenu);
navMenuItems.forEach(item => item.addEventListener("click", (event) => { handleBurgerMenu(); handleContainers(event); }))
darkLightSwitch.addEventListener("click", switchDarkLightMode);

// Shows/hides menu
function handleBurgerMenu() {
    if (window.matchMedia("(max-width: 1024px)").matches) {
        if (burgerMenu.classList.contains("activeBurgerMenu")) {
            burgerMenu.style.clipPath = "inset(0 0 100% 0)";
            burgerMenu.classList.toggle("activeBurgerMenu");
        }
        else {
            burgerMenu.style.clipPath = "inset(0 0 0 0)";
            burgerMenu.classList.toggle("activeBurgerMenu");
        }
    }
}


// Shows/hides containers
function handleContainers(event) {
    if (window.matchMedia("(max-width: 1024px)").matches) {
        const containerClass = event.target.dataset.class;
        const activeContainer = document.querySelector(".activeContainer");
        const newActiveContainer = document.querySelector("#" + containerClass);
        const root = document.querySelector("#root");

        root.scrollTo(0, 0);

        if (containerClass !== undefined && activeContainer !== newActiveContainer) {
            activeContainer.style.display = "none";
            activeContainer.classList.remove("activeContainer");

            newActiveContainer.style.display = "block";
            newActiveContainer.classList.add("activeContainer");
        }
    }
}

// Flips the light switch
function switchDarkLightMode() {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
        html.classList.toggle("dark");
        window.localStorage.setItem("theme", "light");
    }
    else {
        html.classList.toggle("dark");
        window.localStorage.setItem("theme", "dark");
    }
}

// Reads from localStorage first then OS preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')

} else {
    document.documentElement.classList.remove('dark')
}