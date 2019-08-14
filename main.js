
let hiddenElement = document.getElementById("links");
let btn = document.querySelector('.button-contact');

function handleButtonClick() {
   hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
}

btn.addEventListener('click', handleButtonClick);