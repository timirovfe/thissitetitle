document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector(".sidebar");
    const menuItems = document.querySelectorAll(".sidebar__link");
    const hamburger= document.querySelector(".header__menu");
    const body= document.querySelector("body");

    function toggleMenu() {
        if (sidebar.classList.contains("open")) {
            sidebar.classList.remove("open");
            hamburger.classList.remove("open");
            body.style.overflow="inherit";
        } else {
            sidebar.classList.add("open");
            hamburger.classList.add("open")
            body.style.overflow="hidden";
        }
    }

    hamburger.addEventListener("click", toggleMenu);

    menuItems.forEach(
        function(menuItem) {
            menuItem.addEventListener("click", toggleMenu);
        }
    )
})