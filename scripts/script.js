document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

document.getElementById("menu-cars").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

document.getElementById("menu-price").onclick = function () {
    document.getElementById("price").scrollIntoView({behavior: "smooth"});
}

var buttons = document.getElementsByClassName("car-button");
for (i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById("price-action").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("Заполните поле имя!");
    } else if (document.getElementById("phone").value === "") {
        alert("Заполните поле телефон!");
    } else if (document.getElementById("phone").value === "") {
        alert("Заполните поле авто!");
    } else {
        alert("Все ок. Скоро свяжемся!")
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const elem = document.querySelector("body");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionY = 100 + (0.4 * window.pageYOffset) + 'px';
    })
});