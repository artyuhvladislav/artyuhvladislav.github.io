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
    nav: true,
    onInitialized: counter,
    onChanged: counter,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav: false
      },
      600:{
        item:1,
        nav:false
      },
      962:{
        items:3,
        nav: true,
      }
    }



  })
});
function counter(event) {
  if (!event.namespace) {
    return;
  }
  var slides = event.relatedTarget;
  $('.slider-counter').text(slides.relative(slides.current()) + 1 + ' из ' + (slides.items().length));
}
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
    dots: false,
    nav: true
  })
});
$(document).ready(function(){
  $(".matrerial-slider").owlCarousel({
    items: 1,
    loop: false,
    dots: false,
    nav: true  
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
// var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

// var hamburgers = document.querySelectorAll(".hamburger");
// if (hamburgers.length > 0) {
//   forEach(hamburgers, function(hamburger) {
//     hamburger.addEventListener("click", function() {
//       this.classList.toggle("is-active");
//     },false);
//   });
// };



// $(function() {
//   $(document).on("click", ".mobile_menu_container .parent", function(e) {
//     e.preventDefault();
//     $(this).siblings("ul").addClass("loaded");
//   });
//   $(document).on("click", ".mobile_menu_container .back", function(e) {
//     e.preventDefault();
//     $(this).parent().parent().removeClass("loaded");
//   });
//   $(document).on("click", ".mobile_menu", function(e) {
//     e.preventDefault();
//     $(".mobile_menu_container").addClass("loaded");
//     $(".mobile_menu_overlay").fadeIn();
//   });
//   $(document).on("click", ".mobile_menu_overlay", function(e) {
//     $(".mobile_menu_container").removeClass("loaded");
//     $(this).fadeOut();
//   });
// })
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
          $(document).on('click', '.open', function(){
            $(this).siblings('.count').toggleClass('hide');
            $(this).children('.open2').toggleClass('close');

          });
// $(document).on('click', '.open', function(){
//   $(this).toggleClass('close');
// });



$('.show_popup').click(function() { // Вызываем функцию по нажатию на кнопку 
    var popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id 
    $(popup_id).show(); // Открываем окно
    $('.overlay_popup').show(); // Открываем блок заднего фона
  })
$('.close-pop').click(function() { // Обрабатываем клик по заднему фону
    $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
  }) 
$('.overlay_popup').click(function() { // Обрабатываем клик по заднему фону
    $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
  })







$(document).ready(function(){
  $('.gallery a.gal').touchTouch();
  $().UItoTop({ easingType: 'easeOutQuart' });
});




$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
      left: ($(document).width() - $('#magnify').outerWidth())/2,
      // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
      top: ($(window).height() - $('#magnify').outerHeight())/2
    });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();

    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});





// $(document).ready(function(){
//   $('.slideshow').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     centerMode: true,
//     variableWidth: true
//   });
// });




// var $status = $('.pagingInfo');
// var $slickElement = $('.top-slider');

// $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//         //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
//         var i = (currentSlide ? currentSlide : 0) + 1;
//         $status.text(i + '/' + slick.slideCount);
//       });

// $slickElement.slick({
//   slide: 'img',
//   autoplay: true,
//   dots: true
// });

var index = $('li:has(.active)').index('.flex-control-nav li')+1;
var total = $('.flex-control-nav li').length;













$(window).on('load', function(){
  $('.preloader').delay(500).fadeOut('slow');
})











