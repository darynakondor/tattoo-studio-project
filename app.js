const iconMenu = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");
const iconClose = document.querySelector(".icon-close")
iconMenu.addEventListener("click", function() {
    menu.classList.toggle("menu-block");
    document.body.classList.toggle("overfl-hid");
    iconMenu.classList.add("hiden");
    iconClose.classList.add("block");
});

iconClose.addEventListener("click", function() {
    menu.classList.remove("menu-block");
        iconClose.classList.remove("block");
        iconMenu.classList.remove("hiden");
    })