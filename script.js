let menu_btn = document.querySelector(".menu-logo");
let extend_menu = document.querySelector(".extend-menu");
let menu = document.querySelector(".menu");
const buttons = document.querySelectorAll(".change-btn button");
const background = document.querySelector(".background");
var flag = 1;

menu_btn.addEventListener("click", function () {
  if (flag == 1) {
    extend_menu.style.display = "flex";
    menu.innerText = "Close";
    flag = 0;
  } else {
    extend_menu.style.display = "none";
    menu.innerText = "Menu";
    flag = 1;
  }
});

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    switch (index) {
      case 0:
        background.style.backgroundImage = `url(assets/bg1.jpg)`;
        break;
      case 1:
        background.style.backgroundImage = `url(assets/bg2.jpg)`;
        break;
      case 2:
        background.style.backgroundImage = `url(assets/bg3.jpg)`;
        break;
      default:
        break;
    }
  });
});
