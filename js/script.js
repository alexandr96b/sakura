$(document).ready(function () {


$(".b-card-size ul li").click(function(e) {
  e.preventDefault();
  $(".b-card-size ul li").removeClass('active');
  $(this).addClass('active');
})


$(".b-input-tel").inputmask("+7(999)999-99-99");

$('select').styler({
  selectSearch: true,
});

$('.b-main-next').on("click", function() {
    $('.b-main-slider').slick("slickNext"); 
})
$('.b-main-prev').on("click", function() {
    $('.b-main-slider').slick("slickPrev"); 
})

$('.b-main-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  dots: true
});

$('.b-product-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: true,
  dots: true
});

$('.btn-read').click(function(){
  $(this).prev().toggleClass('active');
     $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $(this).text('свернуть');
    } else{
       $(this).text('читать далее');
    }
});

$('.b-reviews-next').on("click", function() {
    $('.b-reviews-slider > .row').slick("slickNext"); 
})
$('.b-reviews-prev').on("click", function() {
    $('.b-reviews-slider > .row').slick("slickPrev"); 
})

$('.b-reviews-slider > .row').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  fade: false,
  variableWidth: false,
  adaptiveHeight: true,
  arrows: false,
  dots: false,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 2
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});




$('.b-contacts-top a').click(function(e){
  $('.b-filters-wrapper').toggleClass('active');
  $(this).toggleClass('active');
  e.preventDefault();
});

$('.phone-top__ico').click(function(){
  $('.phone-drop1').toggleClass('active');
  $(this).toggleClass('active');
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".phone-top__ico , .phone-drop1").length) {
    $('.phone-drop1').removeClass('active');
    $('.phone-top__ico').removeClass('active');
  }
  e.stopPropagation();
});

$('.b-phone-item__arrow').click(function(){
  $('.phone-drop2').toggleClass('active');
  $(this).toggleClass('active');
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".b-phone-item__arrow , .phone-drop2").length) {
    $('.phone-drop2').removeClass('active');
    $('.b-phone-item__arrow').removeClass('active');
  }
  e.stopPropagation();
});


$(".btn-scroll").click(function(){
  $('html, body').animate({scrollTop:0}, 'slow');
});

var scrolledpx = parseInt($(window).scrollTop());
$(window).scroll( function (){

    scrolledpx = parseInt($(window).scrollTop()); 

    if(scrolledpx > 1530){
        $('.btn-scroll').addClass('active');
     } else if(scrolledpx < 1531){
      $('.btn-scroll').removeClass('active');
     }

    if(scrolledpx > 230){
        $('.b-header-top').addClass('active');
     } else if(scrolledpx < 231){
      $('.b-header-top').removeClass('active');
     }

  });



$('.menu-icon').click(function(){
  $('.b-header-right').toggleClass('active');
  $('.menu-icon').toggleClass('active');
});


$(document).on('click', function(e) {
  if (!$(e.target).closest(".menu-icon , .b-header-right > div").length) {
    $('.b-header-right').removeClass('active');
    $('.menu-icon').removeClass('active');
  }
  e.stopPropagation();
});



/*$('.b-contacts-item__ico').click(function(){
  $(this).parent().toggleClass('active');
});
*/



$('.b-card-slider__big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  arrows: false,
  asNavFor: '.b-card-slider__pager',
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});



$('.b-card-slider__pager').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  asNavFor: '.b-card-slider__big',
  verticalSwiping: true,
  vertical: true,
  focusOnSelect: true,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        verticalSwiping: false,
        vertical: false,        
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.b-card-slider__next').on("click", function() {
    $('.b-card-slider__big').slick("slickNext"); 
})
$('.b-card-slider__prev').on("click", function() {
    $('.b-card-slider__big').slick("slickPrev"); 
})

// google maps

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 13,
        disableDefaultUI: true,

        // The latitude and longitude to center the map (always required)

        center: new google.maps.LatLng(56.00754747, 92.86687374), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 33
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f7f7f7"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#deecdb"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": "25"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "25"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "saturation": "-90"
            },
            {
                "lightness": "25"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0f1f9"
            }
        ]
    }
]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({ 
        position: new google.maps.LatLng(56.00754747, 92.86687374),
        map: map,
        title: 'Snazzy!',
                icon: {
                    url: "images/pin.png",
                    scaledSize: new google.maps.Size(57, 68),
                    labelOrigin: new google.maps.Point(145, 25, 5),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(36, 49)           
                }      

    });

}


 $('.b-quantity .minus').click(function() {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.b-quantity .plus').click(function() {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
}); 



$('.b-products-slider .row').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  focusOnSelect: true,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
         adaptiveHeight: true,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$( "#datepicker" ).datepicker();


$('.b-about-slider .row').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  focusOnSelect: true,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.b-specialist-slider .row').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  fade: false,
  variableWidth: false,
  adaptiveHeight: true,
  arrows: true,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,   
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

$('.b-video-slider .row').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  fade: false,
  variableWidth: false,
  adaptiveHeight: true,
  arrows: true,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,  
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});


$('.b-article-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  variableWidth: false,
  adaptiveHeight: true,
  arrows: true,
});


$(".b-main-left__bottom a").click(function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
        header = $('.b-header').outerHeight();
    $('body,html').animate({scrollTop: top - header}, 700);
});

$(".b-menu-left a").click(function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
        header = $('.b-header').outerHeight();
    $('body,html').animate({scrollTop: top - header}, 700);
});
/*var $page = $('html, body');
$('.btn-more[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


*/


$('.b-partners-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 6,
  fade: false,
  variableWidth: false,
  adaptiveHeight: true,
  arrows: false,
  dots: true,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});


$('.b-foto-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  fade: false,
  variableWidth: true,
  adaptiveHeight: true,
  arrows: true,
  focusOnSelect: true,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,     
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

 





function moveMenu(){
  if ($(window).width() < 768) {
         $(function(){ 

          $('.b-nav').appendTo('.b-header-right');      
           
        })            
  } else{
         $(function(){ 


          $('.b-nav').appendTo('.b-nav-wrap'); 
           
     })        
  }
}
moveMenu();

$(window).resize(function(){
    moveMenu();
});
 




});


