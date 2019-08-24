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
  	loop: true,
  	dots: false,
  	nav:true,
  	responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        759:{
            items:2,
            nav:true
        },
        1001:{
            items:2,
            nav:true,
            loop:true
        },
         1100:{
            items:3,
            nav:true,
            loop:true
        }

    }
    
  })
});
$(document).ready(function(){
  $(".small-slide").owlCarousel({
  	items: 5,
  	loop: true,
  	dots: false,
  	nav:true,
  	responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        481:{
            items:2,
            nav:true
        },
         759:{
            items:3,
            nav:true
        },
        1001:{
            items:4,
            nav:true,
            loop:true
        }
    }
    
  })
});
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        },false);
      });
    };



$(function() {
    $(document).on("click", ".mobile_menu_container .parent", function(e) {
        e.preventDefault();
        $(this).siblings("ul").addClass("loaded");
    });
    $(document).on("click", ".mobile_menu_container .back", function(e) {
        e.preventDefault();
        $(this).parent().parent().removeClass("loaded");
    });
    $(document).on("click", ".mobile_menu", function(e) {
        e.preventDefault();
        $(".mobile_menu_container").addClass("loaded");
        $(".mobile_menu_overlay").fadeIn();
    });
    $(document).on("click", ".mobile_menu_overlay", function(e) {
        $(".mobile_menu_container").removeClass("loaded");
        $(this).fadeOut();
    });
})
   
