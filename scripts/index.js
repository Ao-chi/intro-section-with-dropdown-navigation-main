//nav toggle
let iconMenu = document.querySelector(".icon-menu");
let iconClose = document.querySelector(".icon-close");
let navMenu = document.querySelector(".nav");
let overlay = document.querySelector(".overlay");

let toggleNav = () => {
    iconMenu.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        overlay.classList.toggle("active");
    });

    iconClose.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        overlay.classList.toggle("active");
    });
};

//dropdown toggle
let dropdownBtn = document.querySelectorAll(".dropdown-toggle");
let arrowIcon = document.querySelectorAll('.dropdown-toggle[aria-expanded="false"]');

for (let i = 0; i < dropdownBtn.length; i++) {
    const drop = dropdownBtn[i];
    dropdownBtn[i].addEventListener("click", function () {
        console.log("clicked");

        let drpMenu = this.nextElementSibling;
        drpMenu.classList.toggle("show");
        dropdownBtn[i].classList.toggle("active");

        if (dropdownBtn[i].classList.contains("active")) {
            dropdownBtn[i].setAttribute("aria-expanded", "true");
        } else {
            dropdownBtn[i].setAttribute("aria-expanded", "true");
        }
    });
}

toggleNav();
