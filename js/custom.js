$(document).ready(function(){


//scrollspy
$('body').scrollspy({ target: '#navbarSupportedContent', offset:100 });



   
 //animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 50
            }, 1000);
            return false;
        }
    }
});
    



/*-------Start Scroll to top----------*/
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 300) {
                $('.top_to_button').fadeIn().addClass('animated fadeInUp');
            } else {
                $('.top_to_button').fadeOut().removeClass('animated fadeInUp');
            }
        });
        $('.top_to_button').on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
/*--------End Scroll to top-----------*/




/*------- Start scroll to change menu bg color---------*/
$(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 200) {
    $("#sticky_header").removeClass("sticky");
   }else{
    $("#sticky_header").addClass("sticky");
   }
  });
/*------- End scroll to change menu bg color---------*/



/*-------Start smooth scroll js----------*/
$('a.smoth-scroll').on("click", function(e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - -20
    }, 1000);
    e.preventDefault();
});
/*-------End smooth scroll js-----------*/			
    

});





