function btnClick() {
    document.querySelector(".btn-for-fun").innerHTML = "Catch me, if you can!";
    document.querySelector(".btn-for-fun").classList.add("run-away");

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


  // const firstPhoto = document.querySelector('.for-exp1');
  // const secondPhoto = document.querySelector('.for-exp2');
  // const thirdPhoto = document.querySelector('.for-exp3');

//убрала классы разные для фото - не будет работать блюр
  // function blurEffect() {
  //     secondPhoto.classList.toggle('blur');
  //     thirdPhoto.classList.toggle('blur');
  
  // };

  // firstPhoto.addEventListener('click', blurEffect);


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

  const btnWrapper = document.querySelector('.btn-wrapper')
  const buttons = document.querySelectorAll('div.btn-wrapper button')
  const photos = document.querySelectorAll('.for-exp');

  const firstButton = document.getElementById('first-button')
  const secondButton = document.getElementById('second-button')
  const thirdButton = document.getElementById('third-button')

  //buttons (with active class?) in btn-wrapper
  //how to check how many buttons are active?  by collection! but how..? ok
  // do we need to know that? yeah, it is condition
  //buttons with active class can't be found? can be - but when they are initialized



  function activeButton () {
    let activeButtons = document.querySelectorAll('.active')
    
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      if (activeButtons.length < 2) {
        this.classList.add('active');
        console.log(activeButtons)
      }
    }
    // console.log(activeButtons)
  }
  

  buttons.forEach(function(element) {
      element.addEventListener('click', activeButton);
    }
  );


//  function blurEffect(photos) {
//     if (firstButton.classList.contains('active')) {
//       photos[0].classList.add('blur');
//     }
//   };
//   blurEffect(photos);

  //how to connect this two massives?
  //we can't do this by collection of active buttons - because elements in it will not be sorted by index;

  //we can make stupid ifs, like "
  // if (firstButton.classList.contain('active')) {
  //  secondPhoto.classList.add("blur") && thirdPhoto.classList.add("blur")
  // }
  //  if (secondButton.classList.contain('active')) {
  //  firstPhoto.classList.add("blur") && thirdPhoto.classList.add("blur")
  // }
  // if (thirdButton.classList.contain('active')) {
  //  firstPhoto.classList.add("blur") && secondPhoto.classList.add("blur")
  // }
  // "

  // but we have a problem - because this conditions will have conflicts!
  // 

  //andrey said that we can do it easily:
  //we give each button and photo classes, we do map() we check if there is some specific button in activeButtons collection - so we can tell 
  // that if any button is not in this collection - its photo should be blurred