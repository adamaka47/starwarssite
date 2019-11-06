$(function() {
	$('#last-link').on('click', function(e) {
		let hrefs = $('#last-link').attr('href');
		let top = $(hrefs).offset().top
		$('html, body').animate({scrollTop: top}, 500)
	})
	$('.category-slider').slick({
		slidesToShow: 4,
		prevArrow: $('.arrow_left'),
		nextArrow: $('.arrow_right'),
		responsive: [
		  {
		    breakpoint: 1170,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		  {
		    breakpoint: 880,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 540,
		    settings: {
		      slidesToShow: 1,
		    }
		  },
	  	]
	});
});