let mobileMenu=document.getElementById("mobile").onclick = function() {open()};
let langChange=document.getElementById("lang").onclick = function() {lang()};
function open(){
  document.getElementById("menu").classList.toggle("open");
  document.getElementById("burger-line").classList.toggle("burger-line-active");
}
// function lang(){
// 	document.getElementById("langopen").classList.toggle("langchoose");
// }