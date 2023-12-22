let menu = document.querySelector(".hamburger");
let container = document.querySelector("#nav-container");
let isOpen = false;

menu.addEventListener("click", function () {
  if (isOpen) {
    container.style.display = "none";
    isOpen = !isOpen;
  } else {
    container.style.display = "flex";
    isOpen = !isOpen;
  }
});
