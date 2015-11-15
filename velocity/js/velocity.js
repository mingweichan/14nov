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
