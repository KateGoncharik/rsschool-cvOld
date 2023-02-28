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
const close = document.querySelector("#close");
const open = document.querySelector("#open");


function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      close.style.display = "none";
      menu.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      close.style.display = "block";
      menu.style.display = "none";
    }
  }
  
  hamburger.addEventListener("click", toggleMenu);