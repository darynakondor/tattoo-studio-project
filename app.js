const iconMenu = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");
const iconClose = document.querySelector(".icon-close");
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
});

let like = document.querySelectorAll(".like");
like.forEach((item) => {
    item.addEventListener("click", function() {
        item.classList.toggle("liked");
    })
});

let images = document.querySelectorAll(".zoom img");
let popupImg = document.querySelector(".popup-images");
let closePopupImg = document.querySelector(".close-popup-image");

images.forEach((item) => {
    item.addEventListener("click", function() {
        popupImg.style.display = 'block';
        document.querySelector(".popup-images img").src = item.getAttribute('src');
    })
});


closePopupImg.addEventListener("click", function() {
    popupImg.style.display = 'none';
});

let links = document.querySelectorAll(".menu-link[data-goto]");

if (links.length > 0) {
    links.forEach(item => {
        item.addEventListener("click", menuLinkClick)
    });
    function menuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const goToSection = document.querySelector(menuLink.dataset.goto);
            const goToSectionValue = goToSection.getBoundingClientRect().top + pageYOffset;
            window.scrollTo ({
                top: goToSectionValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
