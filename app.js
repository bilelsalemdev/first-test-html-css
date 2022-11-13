const burger = document.querySelector(".burger");
const cancel = document.querySelector(".cancel");
const responsiveMenu = document.querySelector(".responsive-menu");
let clicked = false;
function isclicked() {
  if (!clicked) {
    burger.style.display = "none";
    cancel.style.display = "block";
    responsiveMenu.style.display = "flex";
    clicked = true;
  } else {
    burger.style.display = "block";
    cancel.style.display = "none";
    responsiveMenu.style.display = "none";
    clicked = false;
  }
}
