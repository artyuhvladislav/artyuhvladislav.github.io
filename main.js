let mobileMenu=document.getElementById("mobile").onclick = function() {open()};
let langChange=document.getElementById("lang").onclick = function() {lang()};
function open(){
  document.getElementById("menu").classList.toggle("open");
  document.getElementById("burger-line").classList.toggle("burger-line-active");
};
let hiddenElement = document.getElementById("links");
let btn = document.querySelector('.button-contact');

function handleButtonClick() {
   hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
}

btn.addEventListener('click', handleButtonClick);