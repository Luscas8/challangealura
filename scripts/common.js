
const styleSwitcherToggle = document.querySelector('.style__switcher-toggler'),
  styleSwitcher = document.querySelector('.style__switcher');

styleSwitcherToggle.addEventListener('click', () => {
  styleSwitcher.classList.toggle('open');
})


window.addEventListener('scroll', () => {
  if(styleSwitcher.classList.contains('open')) {
    styleSwitcher.classList.remove('open');
  }
})
 

const alternateStyles = document.querySelectorAll('.alternate-style');
document.getElementById('banner-noturno').style.display = "none";

function setActiveStyle(color) {

  alternateStyles.forEach((style) => {

    if(color === style.getAttribute('title')) {    
      style.removeAttribute('disabled');

    
      document.getElementById('banner-noturno').style.display = "none";
      document.getElementById('banner-logo').style.display = "";

    } else {
      style.setAttribute('disabled', 'true');
      document.getElementById('banner-noturno').style.display = "";
      document.getElementById('banner-logo').style.display = "none";
    }
  })
}