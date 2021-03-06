jQuery(document).ready(function(){
// slider
	"use strict";
	$('#slider-carousel').carouFredSel({
		responsive:true,
		width:'100%;',
		circular:true, 

		scroll:
			{
				items:1,
				duration:500,
				pouseOnHover:true

			},
		auto:true,
		items:

				{
					visible:
					{
						min:1,
						max:1
						},
						height:"variable"
					},
 
				
	});

	$('.menumakan-carousel').carouFredSel({
		responsive:true,
		width:'100%;',
		circular:true, 
		prev:'#prev',
		next:'#next',

		scroll:
			{
				items:1,
				duration:500,
				pouseOnHover:true

			},
		auto:true,
		items:

				{
					visible:
					{
						min:1,
						max:4
						},
						height:"variable"
					},
 
				pagination:
							{
								container:".sliderpager",
								pageAnchorBuilder:false
							},
	});



// Akhir slider

$(window).scroll(function(){
	var top=$(window).scrollTop();

	if (top>=60) 
	{
		$("header").addClass('secondary');

	}

	else if($("header").hasClass('secondary')){
		$("header").removeClass('secondary');

		} 

	});


$('#menu').slicknav({
	label:'',
	})

});


// Paralax

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform':'translate(0px,'+wScroll/4+'%)'
	});

	$('.jumbotron h1').css({
		'transform':'translate(0px,'+wScroll/2+'%)'
	});

	$('.jumbotron h3').css({
		'transform':'translate(0px,'+wScroll/2+'%)'
	});

	$('.jumbotron h2').css({
		'transform':'translate(0px,'+wScroll/2+'%)'
	});
});