$(document).ready(function(){
  $(".top-slide").owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    
  })
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[5000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});
$(document).ready(function(){
  $(".section-slide").owlCarousel({
  	items: 3,
  	loop: false,
  	dots: false,
  	nav:true
    
  })
});
$(document).ready(function(){
  $(".small-slide").owlCarousel({
  	items: 5,
  	loop: false,
  	dots: false,
  	nav:true
    
  })
});