// const windowActive = document.querySelector(".header__actions");
const burger = document.querySelector(".burger");
const headerFull = document.querySelector("header");

if (burger) {
    burger.addEventListener('click', () => {

        // const isOpen = windowActive.classList.toggle("active");
        // burger.setAttribute("aria-expanded", isOpen);
        
        burger.classList.toggle("active");

        const isOpenHeader = headerFull.classList.toggle("active");
        headerFull.setAttribute("aria-expanded", isOpenHeader)
        
    });
}
