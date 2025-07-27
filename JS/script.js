
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 0){
    navbar.classList.add('scrolled');
  }else{
    navbar.classList.remove('scrolled');
  }
});
