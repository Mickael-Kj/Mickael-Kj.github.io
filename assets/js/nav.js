const hamburger = document.querySelector("#nav-icon1");
const dropdown = document.querySelector(".dropdown");

hamburger.onclick = () => dropdown.classList.toggle("open");