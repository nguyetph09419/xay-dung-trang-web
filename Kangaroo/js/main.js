$(function(){var html=$('html, body'),navContainer=$('.nav-container'),navToggle=$('.nav-toggle'),navDropdownToggle=$('.has-dropdown');navToggle.on('click',function(e){var $this=$(this);e.preventDefault();$this.toggleClass('is-active');navContainer.toggleClass('is-visible');html.toggleClass('nav-open')});navDropdownToggle.on('click',function(){var $this=$(this);$this.toggleClass('is-active').children('ul').toggleClass('is-visible')});navDropdownToggle.on('click','*',function(e){e.stopPropagation()})})
if (window.innerWidth > 768) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.sticky-header').addClass('fixed');
        } else {
            $('.sticky-header').removeClass('fixed');
        }
    });
}
if (window.innerWidth > 320) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('.sticky-header').addClass('fixed');
        } else {
            $('.sticky-header').removeClass('fixed');
        }
    });
}
$(document).ready(function() {
    if (window.innerWidth > 992) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 400) {
                $('#header').addClass('show_active');
            }else{
                $('#header').removeClass('show_active');
            }
        });
    }
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >=200) {
            $('#go_top').show();
        }
        else {
            $('#go_top').hide();
        }
    });
    if (window.innerWidth > 991) {
        $('.item_dropdown').addClass('in');
    }
    if (window.innerWidth < 768) {
        $('.nav-toggle').click(function(e) {
            e.preventDefault();
            $('.box_menu_left').addClass('is-visible');
            $('.bg_opacity').show();
        });
        $('.close_box').click(function(e) {
            e.preventDefault();
            $('.bg_opacity').hide();
            $('.box_menu_left').removeClass('is-visible');
            $('.nav-container').removeClass('is-visible');
        });
    }
});

