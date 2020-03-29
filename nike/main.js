const el = document.querySelector('.main-header');
let  textCount = 0;
function scanDom(element) {
  
  for(let item of element.childNodes) {
    if(item.nodeType === 3) {
      textCount++;
    }
    if(item.nodeType !== 3) {
      for(let nextItem of item.children){
        if(item.children.length === 0){
          return
        } else {
          scanDom(nextItem)
        }
      }
    }
  }
  return [textCount]
}


console.log(scanDom(el))






//  // let mobileMenu = document.getElementById('mobile-menu');
//  // let mobileWindow = document.getElementById('mobile-window');
//  // mobileMenu.addEventListener('click', function(){
//  // 	mobileWindow.classList.toggle('show');
//  // });



//  // $('body').height($('body').height() + 1);
//  // function trackScroll() {
//  // 	var scrolled = window.pageYOffset+500;
//  // 	var coords = document.documentElement.clientHeight;

//  // 	if (scrolled > coords) {
//  // 		goTopBtn.classList.add('up-show');
//  // 	}
//  // 	if (scrolled < coords) {
//  // 		goTopBtn.classList.remove('up-show');
//  // 	}
//  // }

//  // function backToTop() {
//  // 	if (window.pageYOffset > 0) {
//  // 		window.scrollBy(0, -50);
//  // 		setTimeout(backToTop, 0);
//  // 	}
//  // }

//  // let goTopBtn = document.getElementById('up-btn');

//  // window.addEventListener('scroll', trackScroll);
//  // goTopBtn.addEventListener('click', backToTop);



//  // window.addEventListener('scroll', function() {
//  // 	let scroll = window.pageYOffset;
//  // 	document.querySelector('.bg').style.top = `${-scroll}px`;
//  // 	// document.querySelector('.greetings > .container').style.top = `${-scroll}px`;
//  // 	document.querySelector('.about').style.marginTop = `${-scroll}px`;
//  // });

//  // let coordsElement = document.getElementById('greetings');
//  // function getCoords(element){
//  // 	let box = element.getBoundingClientRect().top;
//  // 	if(box < 0 ) {
//  // 		upBtn.classList.toggle('up-show');
//  // 	}
//  // }
//  // getCoords(coordsElement);

