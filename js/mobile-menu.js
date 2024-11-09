document.addEventListener('DOMContentLoaded', () => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const navListRef = document.querySelector('.navigation__list');
  const headerRef = document.querySelector('.header');
  const navigationRef = document.querySelector('.navigation'); 

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    navListRef.classList.toggle('is-open');
    headerRef.classList.toggle('is-open');
    navigationRef.classList.toggle('is-open'); 
  });

  document.querySelectorAll('.navigation__link').forEach((n) =>
    n.addEventListener('click', () => {
      navListRef.classList.remove('is-open');
      menuBtnRef.classList.remove('is-open');
      headerRef.classList.remove('is-open');
      navigationRef.classList.remove('is-open'); 
    })
  );
});



const playList = document.querySelector('.play__list');
const mediaQuery = window.matchMedia('(min-width: 1200px)');

function handleScreenChange(e) {
  if (e.matches) {
    playList?.classList.remove('play__list');
     playList?.classList.add('play__list-desk');
  } else {
    playList?.classList.add('play__list');
    playList?.classList.remove('play__list-desk');
  }
}

mediaQuery.addEventListener('change', handleScreenChange);
handleScreenChange(mediaQuery); 



function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const button = element.querySelector(".toggle-button");
  
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
    button.textContent = "-";
  } else {
    answer.style.display = "none";
    button.textContent = "+";
  }
}




