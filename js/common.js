$(function() {

	var tablet = 1220;

	// Toogle menu

	$('#toggle').on('click', function() {
		$(this).toggleClass('on');
		$('.menu-main nav').toggleClass('showMenu');
	});


	// Toggle submenu
	$("#nav li.menu-item-has-children > a").on("click", function (e) {
	     if (window.innerWidth < tablet) {
	        if (!$(this).hasClass("clicked")) {
	            e.preventDefault();
	            $(this).next("ul").slideToggle("fast");
	            //$(this).addClass("clicked");
	        }
	    }
	});

	//Search

	$('.search .btn-search').on('click', searchClick);
	$('.search span').on('click', searchClick);

	function searchClick(e){
		var	form = $(this).closest("form"),
			input = form.find(".search-field");

		if (!input.val()) {
			e.preventDefault();
			form.toggleClass("expanded");
		}
		if (form.hasClass("expanded")) {
	        input.focus();
	    }
	}




	$('.search .search-field').on("focusout", function (e) {
		    if (!$(this).val()) {
		        $(this).closest("form").removeClass("expanded");
		    }
	});


	// Carousel

	var rtl = false;

		if ($('html').attr('dir') === "rtl") {
			rtl = true
		}

		if ($('.bs-carousel').length) {
			$('.bs-carousel').slick({
				rtl: rtl,
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				dots: true,
				speed: 300,
				prevArrow: '<div class="prev"></div>',
				nextArrow: '<div class="next"></div>',
				responsive: [
				{
					breakpoint: 1220,
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
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
				]
			})
		}

		if ($('.product-carousel').length) {
			$('.product-carousel').slick({
				rtl: rtl,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				speed: 300,
				prevArrow: '<div class="prev"></div>',
				nextArrow: '<div class="next"></div>'//,
			})
		}

		if ($('.other-prod-slider').length) {
			$('.other-prod-slider').slick({
				rtl: rtl,
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				dots: false,
				speed: 300,
				prevArrow: '<div class="prev"></div>',
				nextArrow: '<div class="next"></div>',
				responsive: [
				{
					breakpoint: 1220,
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
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
				]
			})
		}

		if ($('.other-posts-slider').length) {
			$('.other-posts-slider').slick({
				rtl: rtl,
				arrows: true,
				dots: false,
				infinite: true,
				draggable: true,
				swipe: true,
				swipeToSlide: false,
				slidesToShow: 4,
				focusOnSelect: false,
				prevArrow: '<div class="prev"></div>',
				nextArrow: '<div class="next"></div>',
				touchThreshold: 10,
				responsive: [
					{
						breakpoint: 690,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1
						}
					}
				]
			})
		}

	// inputs change amount


	$("body").on("click", ".btn-count", function () {
		var input = $(".input-count");
		var val = parseFloat(input.val());
		if ($(this).hasClass("less")) {
			if (val > 30) input.val(--val - 9)
		}
		if ($(this).hasClass("more")) {
			if (val < 60) input.val(++val + 9)
		}
		input.change();
	});

	$(document).bind("change keyup input click", "input.input-count", function (e) {
		var input = $(e.target);
		if (input.hasClass('input-count')) {
			//prevent symbols
			if (input.val().match(/[^0-9]/g)) {
				input.val(input.val().replace(/[^0-9]/g, ''));
			}
		}
	});

		autosize(document.querySelectorAll('textarea'));

	$(".add-field").on('click', function(e){
		e.preventDefault();
		$(".order-field").fadeIn();
		$(this).css('display', 'none');
	});
















	var $popup = $('.popup'),
		//$popupOverlay = $('.popupOverlay'),
		$popupClose = $('.close'),
		mySlider;

	$(document).on('click','#prod-item', function(){
		var currentIndex = $(this).attr('data-num');
		popup(+currentIndex);

		//console.log(currentIndex);
	});

	// $(document).on('click', '.popupOverlay', function(){
	// 	$(this).hide();
	// 	$popup.hide();
	// 	$popup.removeClass('activePopup');
	// });
	$(document).on('click', '.close', function(){
		$(this).hide();
		$popup.hide();
		$popup.removeClass('activePopup');
	});

	function popup(initialSlide) {
        $popupClose.show();
        $popup.addClass('activePopup').show();
        slider(initialSlide);
    }




    function slider(initialSlide) {
    	//mySlider && mySlider.destroy();
    	mySlider = $('.slide-container').slick({
					rtl: rtl,
					arrows: true,
					fade: true,
					initialSlide: initialSlide,
					dots: false,
					infinite: true,
					draggable: true,
					swipe: true,
					swipeToSlide: false,
					slidesToShow: 1,
					focusOnSelect: false,
					prevArrow: '<div class="prev"></div>',
					nextArrow: '<div class="next"></div>',
					touchThreshold: 10
				})
    }

});

