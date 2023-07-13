const menuIcon = document.querySelector(".menu-icon");
const menuContent = document.querySelector(".sm-menu-content");
const closeMenu = document.querySelector(".close-menu");

menuIcon.addEventListener("click", () => {
    // if (menuContent.classList.contains("show")) {
    //     menuContent.classList.remove("show");
    // } else {
    //     menuContent.classList.add("show");
    // }

    menuContent.classList.toggle("show");
    menuIcon.classList.toggle("close");
});

closeMenu.addEventListener("click", function () {
    menuContent.classList.remove("show");
    menuIcon.classList.toggle("close");
});
