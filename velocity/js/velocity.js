/*jslint browser: true*/
/*global $, jQuery, alert*/
'use strict';

$(document).ready(function () {


    var stickyNavTop = $('.top-head').offset().top;

    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.top-head').addClass('navbar-fixed1', 1000);
        } else {
            $('.top-head').removeClass('navbar-fixed1', 1000);
        }
    };

    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });

    //Smoothscroll function
    $(function () {
        $('a[href*=#][class*="smoothScroll"]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 180
                    }, 1000);
                    return false;
                }
            }
        });
    });

});