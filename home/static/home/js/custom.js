(function ($) {

  "use strict";

  // PRE LOADER
  $(window).load(function(){
    $('.preloader').fadeOut(3000); 
  });

  // Add this for the mobile dropdown
  $('#navbarToggle').on('click', function() {
    $('#navbarNav').toggleClass('show');
    // Toggle the visibility of social media icons
    $('.navbar-social').toggleClass('show'); 
  });

  // MENU  (This might need adjustments depending on your specific menu setup)
  $('.navbar-collapse a').on('click',function(){
    $(".navbar-collapse").collapse('hide');
  });

  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");   

    }
  });
  // Smooth Scroll for "Find Us" link
  $('a[href="#findus"]').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 90 // Adjust offset as needed
    }, 1000);
    event.preventDefault();
  });


    // PARALLAX EFFECT
    $.stellar({
      horizontalScrolling: false,
    });


    // MAGNIFIC POPUP
    $('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery:{
          enabled:true
        },
        zoom: {
        enabled: true,

        duration: 300,
        easing: 'ease-in-out',

        opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });

  // SMOOTH SCROLL
  $(function() {
    $('.custom-navbar a, #home a').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();   

    });
  });
})(jQuery);

