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
//
//$(document).ready(function() {
//	// navigation click actions	
//	$('.scroll-link').on('click', function(event){
//		event.preventDefault();
//		var sectionID = $(this).attr("data-id");
//		scrollToID('#' + sectionID, 750);
//	});
//	// scroll to top action
//	$('.scroll-top').on('click', function(event) {
//		event.preventDefault();
//		$('html, body').animate({scrollTop:0}, 'slow'); 		
//	});
//	// mobile nav toggle
//	$('#nav-toggle').on('click', function (event) {
//		event.preventDefault();
//		$('#main-nav').toggleClass("open");
//	});
//});
//// scroll function
//function scrollToID(id, speed){
//	var offSet = 50;
//	var targetOffset = $(id).offset().top - offSet;
//	var mainNav = $('#main-nav');
//	$('html,body').animate({scrollTop:targetOffset}, speed);
//	if (mainNav.hasClass("open")) {
//		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
//		mainNav.removeClass("open");
//	}
//}
//if (typeof console === "undefined") {
//    console = {
//        log: function() { }
//    };
//}
//new test scroll
//$('a[href^="#"]').on('click', function(event) {
//    var target = $(this.href);
//    if( target.length ) {
//        event.preventDefault();
//        $('html, body').animate({
//            scrollTop: target.offset().top
//        }, 1000);
//    }
//});
//
//$('html, body').animate({
//    scrollTop: $("#target-element").offset().top
//}, 1000);

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 180
        }, 1000);
        return false;
      }
    }
  });
});