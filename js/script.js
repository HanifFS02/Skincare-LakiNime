// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Hamburger Menu Diklik
document.querySelector("#hamburger-menu").onclick = () => {
  event.preventDefault();
  navbarNav.classList.toggle("active");
};

// // // Stay di tempat pas klik hamburger menu
// // jQuery("#hamburger-menu").on("click", handler);

// // function handler(event) {
// //   event.preventDefault();
// }

// Klik Di luar sidebar untuk menghilangkan navbar tanpa harus klik hamburger menu
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
