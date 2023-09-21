'use strict';

//////////  Elements  //////////
const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const imgProfile = document.querySelector(".about-img");

// const serviceBoxes = document.querySelectorAll('.services-box');

const projects = document.querySelectorAll('.project-img');
const lightbox = document.querySelector('.lightbox');
const lightImg = document.getElementById('lightbox-img');
const lightTitle = document.getElementById('lightbox-title')
const lightTech = document.querySelector('.lightbox-tech');
const lightDesc = document.getElementById('description');
const lightBtn = document.getElementById('lightbox-btn');
const overlay = document.querySelector('.overlay');
const lightLink = document.getElementById('lightbox-link');

// Project Elements //
const pig = document.getElementById('pig');
const mapty = document.getElementById('mapty')
const guess = document.getElementById('guess');
const breu = document.getElementById('breu');
const connect = document.getElementById('connect');
const travia = document.getElementById('travia');

// Sticky Navbar
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
  // showOverlay();
};
window.onscroll = () => {
  navbar.classList.remove("active");
  // hideOverlay();
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
// };

//// Fade in Animations ////
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
})

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElementsL = document.querySelectorAll('.hidden-left');
const hiddenElementsR = document.querySelectorAll('.hidden-right');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElementsL.forEach((el) => observer.observe(el));
hiddenElementsR.forEach(el => observer.observe(el));



//////////// Helper Functions ///////////////

//// Lightbox
const openLightbox = function() {
  lightbox.style.display = 'flex';
  console.log('Lightbox opened');
};
const closeLightbox = function() {
  clearLightbox();
  lightbox.style.display = 'none';
  console.log('Lightbox closed');
};
const showOverlay = function() {
  overlay.style.display = 'block';
  console.log('Overlay showed');
};
const hideOverlay = function() {
  overlay.style.display = 'none';
  console.log('Overlay hidden');
}
const clearLightbox = function() {
  lightImg.innerHTML = '';
  lightTitle.innerHTML = '';
  lightDesc.innerHTML = '';
  // lightTech.innerHTML = '';
  console.log('Lightbox cleared');
}
const updateLightbox = function(data) {
  lightImg.src = data.image;
  lightTitle.textContent = data.title;
  lightDesc.textContent = data.description;
  lightLink.href = data.link;
  console.log('Lightbox data updated');
}

const renderTech = function(data) {
  const lang = data.languages;

  lang.forEach(function(lang) {
    const html = `<div class="tech">${lang}</div>`
    lightTech.insertAdjacentHTML('beforeend', html);
  })
};


const serviceBoxes = document.querySelectorAll('.services-box');

const handleServiceBoxClick = function(event) {
  const serviceBox = event.currentTarget;
  serviceBox.classList.toggle('expanded');
};

serviceBoxes.forEach(function (box) {
  box.addEventListener('click', handleServiceBoxClick);
});




///// Enable Lightbox /////
projects.forEach(function(image) {
  image.addEventListener('click', e => {
    e.preventDefault();

    const imageId = image.parentElement.id;
    ///// Update Lightbox Data /////
    if (imageId === 'bankist') {
      updateLightbox(dataBankist);
      // renderTech(dataBankist);
    } else if (imageId === 'mapty') {
      updateLightbox(dataMapty);
      // renderTech(dataMapty);
    } else if (imageId === 'organizy') {
      updateLightbox(dataOrganizy);
      // renderTech(dataOrganizy)
    } else if (imageId === 'breu') {
      updateLightbox(dataBreu);
      // renderTech(dataBreu);
    } else if (imageId === 'guess') {
      updateLightbox(dataGuess);
      // renderTech(dataGuess);
    } else if (imageId === 'travia') {
      updateLightbox(dataTravia);
      // renderTech(dataTravia);
    }
    ///// Handling LightBox /////
    showOverlay();
    openLightbox();

    console.log('Image clicked');
  })
}) 

////// Hide Overlay and Close Lightbox
overlay.addEventListener('click', function(e) {
  e.preventDefault();
  console.log(e.target);
  closeLightbox();
  hideOverlay();
})

// Projects Data // 
const dataBankist = {
  title: 'Bankist',
  languages: ['HTML', 'CSS', 'JavaScript'],
  description: 'A web app for visualizing a sleek and immersive banking experience.',
  image: './image/bankist.png',
  link: './Bankist/index.html',
}
const dataMapty = {
  title: 'Mapty: Workout Tracker',
  languages: ['HTML', 'CSS', 'JavaScript', 'Leaflet'],
  description: 'A dynamic object-oriented app featuring a map feature built with Leaflet plugin ',
  image: './image/mapty.png',
  link: './Mapty/mapty.html',
};
const dataOrganizy = {
  title: 'Organizy: Align Your Goals',
  languages: ['HTML', 'CSS', 'JavaScript',],
  description: 'A basic to-do list app with a simple and compressed but dynamic layout.',
  image: './image/organizy.png',
  link: './Organizy/index.html',
}
const dataBreu = {
  title: 'Breu',
  languages: ['HTML', 'CSS', 'JavaScript'],
  description: 'Immersive eCommerce coffee shop site with interactive features with a dark and modern theme',
  image: './image/breu.png',
  link: 'Breu/breu.html',
}
const dataGuess = {
  title: 'Guess: Find The Secret Number',
  languages: ['HTML', 'CSS', 'JavaScript'],
  description: 'A simple retro "guessing" game built with ES6+ backend game logic',
  image: './image/guess.png',
  link: 'Guess/guess.html',
}
const dataTravia = {
  title: 'Travia: Discover Your Solitude',
  languages: ['HTML', 'CSS', 'JavaScript'],
  description: 'A interactive multi-page traveling app with smooth animations and a modern layout',
  image: './image/travia.png',
  link: 'Travia/index.html',
}

