document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

const menu = document.querySelector('.menu');
const navMenu = document.querySelector('nav ul');

menu.addEventListener('click', () => {
  navMenu.classList.toggle('visible');
  menu.textContent = navMenu.classList.contains('visible');
});