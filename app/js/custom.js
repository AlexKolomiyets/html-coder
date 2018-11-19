$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});

	$('.js-mobile,.js-close').click(function(){
		$('.mobile-menu').slideToggle();
	});

	$('.js-slick').slick({
		dots: false,
		infinite: true,
		arrows: false,
		slidesToShow: 4,
		responsive: [
			{
			  breakpoint: 1000,
			  settings: {
				slidesToShow: 2,
				infinite: true,
			  }
			},
			{
				breakpoint: 810,
				settings: {
					slidesToShow: 2,
					infinite: true,
				}
			},
			{
				breakpoint: 491,
				settings: {
					slidesToShow: 1,
					infinite: true,
				}
			},
			{
			  breakpoint: 600,
			  settings: "unslick"
			}				
		]
	});

	var map;
	var myMap
	function initMap() {
		map = document.getElementById('map');
		var option = {
			center: {lat: 50.431782, lng: 30.516382},
			zoom: 13,
			disableDefaultUI: true
		}
		myMap = new google.maps.Map(map, option);
		var marker = new google.maps.Marker({
			position: {lat: 50.431782, lng: 30.516382},
			map: myMap,
			icon: 'img/point.png'
		});
	}
	initMap();
	
	/* components */
	
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
	
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



