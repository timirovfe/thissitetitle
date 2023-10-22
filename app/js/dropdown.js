document.addEventListener('DOMContentLoaded', () => {
    const helpBlock = document.querySelector(".help-block__item");
    const helpBtn= document.querySelector(".header__help");

    function toggleMenu() {
        if (helpBlock.classList.contains("open")) {
            helpBlock.classList.remove("open");
        } else {
            helpBlock.classList.add("open");
        }
    }

    helpBtn.addEventListener("click", toggleMenu);
})