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


  const firstPhoto = document.querySelector('.for-exp1');
  const secondPhoto = document.querySelector('.for-exp2');
  const thirdPhoto = document.querySelector('.for-exp3');

//убрала классы разные для фото - не будет работать блюр
  function blurEffect() {
      secondPhoto.classList.toggle('blur');
      thirdPhoto.classList.toggle('blur');
  
  };

  firstPhoto.addEventListener('click', blurEffect);


  // const btnContainer = document.querySelector('.btn-wrapper')
  // const btns = btnContainer.getElementsByClassName('.btn-for-photo')

  // for (let i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener('click', function() {
  //     let current = document.getElementsByClassName('active');
  //     if (current.length > 0) {
  //       current[0].className = current[0].className.replace('active', "");
  //     }
      
  //     this.className += 'active';
  //   })
  // }

  const btns = document.querySelectorAll('.btn-for-photo');
  const photos = document.querySelectorAll('for-exp');

  function activeButton () {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    }
   this.classList.add(' active');
  }

  btns.forEach(function(element) {
   element.addEventListener('click', activeButton);
  }
  );
