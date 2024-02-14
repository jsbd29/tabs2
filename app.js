let tabHeader = document.querySelector(".tab-header");
let tabIndicator = document.querySelector(".tab-indicator");
let tabBody = document.querySelector(".tab-body");

let tabsPane = tabHeader.querySelectorAll("div");
for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener('click', function () {
        tabHeader.querySelector(".active").classList.remove("active");
        tabsPane[i].classList.add("active");
        tabBody.querySelector(".active").classList.remove("active");
        tabBody.querySelectorAll("div")[i].classList.add("active");

        tabIndicator.style.left = `calc(calc(100%/4) * ${i})`;
    });
}
