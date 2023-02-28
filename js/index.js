function btnClick() {
    document.querySelector(".btn-for-fun").hidden = true;
};

const btn = document.querySelector(".btn-for-fun");

btn.addEventListener('click', btnClick);

const avatar = document.querySelector("#avatar");
avatar.addEventListener('click', () => alert("Yes, it's me"));


const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector("#hamburger");
const closeIcon = document.querySelector("#close");
const openIcon = document.querySelector("#open");


function toggleMenu() {
    if (menu.classList.contains("show-menu")) {
      menu.classList.remove("show-menu");
      closeIcon.style.display = "none";
      openIcon.style.display = "block";
    } else {
      menu.classList.add("show-menu");
      closeIcon.style.display = "block";
      openIcon.style.display = "none";
    }
  }
  
  hamburger.addEventListener("click", toggleMenu);