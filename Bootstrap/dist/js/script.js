// paralax

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform':'translate(0px,'+wScroll/4+'%)'
	});

	$('.jumbotron h1').css({
		'transform':'translate(0px,'+wScroll/2+'%)'
	});

	$('.jumbotron h2').css({
		'transform':'translate(0px,'+wScroll/4+'%)'
	});
});


	
