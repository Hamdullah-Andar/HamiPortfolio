// create variables
const menuBtn = document.querySelector('.navigation');
const closeBtn = document.querySelector('#close-btn');
const mobileNavigation = document.querySelector('.mobile-navigation');
const MobileLinks = document.querySelector('.mobile-navigation-links');

const headSeaction = document.querySelector('.headline-section');
const projectSection = document.querySelector('.projects');

function blurness(){
  headSeaction.style.filter = 'blur(4px)';
  projectSection.style.filter = 'blur(4px)';
}

function cleanness(){
  headSeaction.style.filter = 'none';
  projectSection.style.filter = 'none';
}

// Add event listener to the humburger menu
menuBtn.addEventListener('click', () => {
  mobileNavigation.classList.toggle('close', blurness());
});

// Add event listener to the close button
closeBtn.addEventListener('click', () => {
  mobileNavigation.classList.toggle('close', cleanness());
});

// Add event listener to the mobile nav-links
MobileLinks.addEventListener('click', (e) => {
  if (e.target.matches('a')) {
    mobileNavigation.classList.toggle('close');
  }
});

