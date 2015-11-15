/*jslint browser: true*/
/*global $, jQuery, alert*/
'use strict';

$(document).ready(function () {
    
    
     var stickyNavTop = $('.top-head').offset().top;
    
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
        
        if (scrollTop > stickyNavTop) {
            $('.top-head').addClass('navbar-fixed1', 1000);   
        }else{
            $('.top-head').removeClass('navbar-fixed1', 1000);   
        }
    };
    
    stickyNav();
    
    $(window).scroll(function() {
        stickyNav(); 
    });
    
    
    
    
//    var stickyNavTop = $('.top-head').offset().top;
//    
//    var stickyNav = function(){
//        var scrollTop = $(window).scrollTop();
//        
//        if (scrollTop > stickyNavTop) {
//            $('.top-head').addClass('navbar-fixed1');   
//        }else{
//            $('.top-head').removeClass('navbar-fixed1');   
//        }
//    };
//    
//    stickyNav();
//    
//    $(window).scroll(function() {
//        stickyNav(); 
//    });
//    
//    
//    
    
    
    
    
    
//
//  $(window).scroll(function () {                           
//      //if you hard code, then use console
//      //.log to determine when you want the 
//      //nav bar to stick.  
//      console.log($(window).scrollTop())
//    if ($(window).scrollTop() > 50) {
//      $('#navbar').addClass('navbar-fixed1');
//    }
//    if ($(window).scrollTop() < 51) {
//      $('#navbar').removeClass('navbar-fixed1');
//    }
//  });
});
<<<<<<< HEAD

/**
 * Check a href for an anchor. If exists, and in document, scroll to it.
 * If href argument ommited, assumes context (this) is HTML Element,
 * which will be the case when invoked by jQuery after an event
 */
function scroll_if_anchor(href) {
    href = typeof(href) == "string" ? href : $(this).attr("href");
    
    // You could easily calculate this dynamically if you prefer
    var fromTop = 50;
    
    // If our Href points to a valid, non-empty anchor, and is on the same page (e.g. #foo)
    // Legacy jQuery and IE7 may have issues: http://stackoverflow.com/q/1593174
    if(href.indexOf("#") == 0) {
        var $target = $(href);
        
        // Older browser without pushState might flicker here, as they momentarily
        // jump to the wrong position (IE < 10)
        if($target.length) {
            $('html, body').animate({ scrollTop: $target.offset().top - fromTop });
            if(history && "pushState" in history) {
                history.pushState({}, document.title, window.location.pathname + href);
                return false;
            }
        }
    }
}    

// When our page loads, check to see if it contains and anchor
scroll_if_anchor(window.location.hash);

// Intercept all anchor clicks
$("body").on("click", "a", scroll_if_anchor);
=======
>>>>>>> parent of e6a4af9... PLEASE
