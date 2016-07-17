jQuery(document).ready(function($) {

	'use strict';

	$('.toggle-id').on('click', function() {
		var id = $(this).attr('href');
		$(id).slideToggle(250);
		return false;
	});

	$('a.toggle-menu').click(function() {
		$('#responsive-menu').stop(true, true).slideToggle();
		return false;
	});

	function initSuperFish() {

		$(".sf-menu").superfish({
			delay: 50,
			autoArrows: true,
			animation: {
				opacity: 'show'
			}
		});

	}

	initSuperFish();

	$('.sub-menu').addClass('animated fadeInRight');
	$('#search-icon').on('click', function() {
		$('#search-overlay').removeClass('animated bounceOutUp');
		$('#search-overlay').fadeIn(0).addClass('animated bounceInDown');
		$('.search-form-holder input[type="search"]').focus();
		return false;
	});
	$('.close-search').on('click', function() {
		$('#search-overlay').removeClass('animated bounceInDown');
		$('#search-overlay').addClass('animated bounceOutUp');
		return false;
	});
	jQuery(document).keyup(function(e) {
		if(e.keyCode === 27) {
			$('#search-overlay').removeClass('animated bounceInDown');
			$('#search-overlay').addClass('animated bounceOutUp');
			return false;
		} // esc
	});
	$(window).resize(function() {
		var height = $(window).height();
		var width = $(window).width();
		$('.swiper-container, .swiper-slide').height(height);
		$('.swiper-container, .swiper-slide').width(width);

	})
	$(window).resize();
	$('.arrow-left, .arrow-right').on('click', function() {
		$('.slider-caption h2').removeClass('animated fadeInDown');
		$('.slider-caption h2').fadeIn(0).addClass('animated fadeInDown');
		$('.slider-caption p').removeClass('animated fadeInUp');
		$('.slider-caption p').fadeIn(0).addClass('animated fadeInUp');
	});
	var mySwiper = new Swiper('.swiper-container', {
		mode: 'horizontal',
		loop: true,
		keyboardControl: true
	})
	$('.arrow-left').on('click', function(e) {
		e.preventDefault()
		mySwiper.swipePrev()
	})
	$('.arrow-right').on('click', function(e) {
		e.preventDefault()
		mySwiper.swipeNext()

	})
	$('.project-slider').slidesjs({
		pagination: false,
		navigation: {
			active: false,
			effect: "fade"
		}
	});

	$('.project-item').hover(function() {
		$('.overlay-b a').addClass('animated fadeIn');
	}, function() {
		$('.overlay-b a').removeClass('animated fadeIn');
	});
	$('.projects-holder').mixitup({
	effects: ['fade', 'grayscale'],
	easing: 'snap',
	transitionSpeed: 400
	});
	$(".fancybox").fancybox();

});
