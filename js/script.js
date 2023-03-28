// Sticky Navbar
const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const imgProfile = document.querySelector(".about-img");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Toggling Dark Mode
let darkmode = document.querySelector("#darkmode");

// `darkmode.onclick = () => {
//   if (darkmode.classList.contains("bx-sun")) {
//     darkmode.classList.replace("bx-sun", "bx-moon");
//     document.body.classList.add("active");
//     imgProfile.style.boxShadow == "0rem, 0rem, 1rem white";
//   } else {
//     darkmode.classList.replace("bx-moon", "bx-sun");
//     document.body.classList.remove("active");
//   }
// };`
