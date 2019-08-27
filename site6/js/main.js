(function($) {
  $(function() {
    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);
$(document).ready(function(){
  $(".top-slider").owlCarousel({
  	items: 3,
  	loop: false,
    dots: false,
    nav: false,
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
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: false,
  
    
  })
});
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[5000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// });
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
  $(".gallery-slider").owlCarousel({
    items: 1,
    loop: false,
       
  })
});
$(document).ready(function(){
  $(".matrerial-slider").owlCarousel({
    items: 1,
    loop: false,
     dots: false,
     nav: false  
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
 // Определяем переменную map
        var map;

        // Функция initMap которая отрисует карту на странице
        function initMap() {

            // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
            map = new google.maps.Map(document.getElementById('map'), {
                // При создании объекта карты необходимо указать его свойства
                // center - определяем точку на которой карта будет центрироваться
                center: {lat: 54.791818, lng: 55.877439,},
                // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
                zoom: 18
            });
        }