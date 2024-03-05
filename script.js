var elem = document.querySelector('.hero-section .main-carousel');
var flkty = new Flickity( elem, {
  draggable: false,
  imagesLoaded: true,
  autoPlay: true,
  freeScroll: true,
  wrapAround: true,
  pauseAutoPlayOnHover: false,
});

var amenities = document.querySelector('.amenities-section .main-carousel');
var flkty = new Flickity( amenities, {
  draggable: true,
  imagesLoaded: true,
  autoPlay: true,
  freeScroll: true,
  wrapAround: true,
  pauseAutoPlayOnHover: false,
  prevNextButtons: false,
  pageDots: false
});

var input = document.querySelector(".cb-form-modal input[type='tel']");
var form = document.querySelector(".cb-form-modal");

var iti = intlTelInput(input, {
  initialCountry: "in"
});

var sideBarInput = document.querySelector(".cb-sideBar-form input[type='tel']");
var sideBarForm = document.querySelector(".cb-sideBar-form");

var iti = intlTelInput(sideBarInput, {
  initialCountry: "in"
});

var heroSectionInput = document.querySelector(".hero-section input[type='tel']");
var heroSectionForm = document.querySelector(".hero-section-form");

var iti = intlTelInput(heroSectionInput, {
  initialCountry: "in"
});

document.querySelector('.privacy-modal-container .privacy-modal-close-btn').addEventListener('click', function(){
  document.querySelector('.privacy-modal-container').style.display = "none";
})

document.querySelector('.footer span button').addEventListener('click', function(){
  document.querySelector('.privacy-modal-container').style.display = "flex";
})

document.querySelector(".header .navbar-toggler").addEventListener("click", function () {
  document.querySelector("body .cb-modal-container").classList.add("cb-show-modal");
});

document.querySelector("body .cb-modal-container .cb-close-btn").addEventListener("click", function () {
  document.querySelector("body .cb-modal-container").classList.remove("cb-show-modal");
});

document.querySelectorAll(".cb-modal-container ul li").forEach(function (el) {
  el.addEventListener("click", function () {
    document.querySelector("body .cb-modal-container").classList.remove("cb-show-modal");
  });
});

document.querySelectorAll('.gallery-section img').forEach(function(el){
  el.addEventListener('click',  function () {
    document.querySelector('.cb-modal-container.cb-image-modal .cb-modal-content img').src = this.src;
    document.querySelector('body .cb-modal-container.cb-image-modal').classList.add('cb-show-modal');
  })
})

window.addEventListener('click', function(e){ 
  if (e.target == document.querySelector('.cb-modal-container.cb-image-modal .cb-modal-overlay')) {
    document.querySelector('body .cb-modal-container.cb-image-modal').classList.remove("cb-show-modal");
  }
});

window.addEventListener('load', function(){
  setTimeout(() => {
    document.querySelector('.side-bar .callback-btn').click();
  }, 1000);
})