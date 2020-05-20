$(function() {
  /*Slider*/
  if ($("#header").length) {
    var swiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".arrow-right",
        prevEl: ".arrow-left"
      }
    });
  }

  // плавное перемещение страницы к нужному блоку

  $(".menu__link").click(function(e) {
    e.preventDefault();
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 800);
  });
  $(".arrow-1").click(function(e) {
    e.preventDefault();
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 800);
  });
  $(".arrow-2").click(function(e) {
    e.preventDefault();
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 800);
  });
});

/* Hamburger menu*/

$(".hamburger-menu-icon-link").on("click", function() {
  $(".hamburger-menu").toggle();
});

$(".hamburger-menu__close").on("click", function() {
  $(".hamburger-menu").hide();
});

$(".hamburger-menu").on("click", function() {
  $(".hamburger-menu").hide();
});

/* Popup */

$('.image-link').magnificPopup({
  type: 'image',
  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }

});

/*WOW Animation*/

new WOW().init();