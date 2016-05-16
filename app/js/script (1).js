/*SCRIPT*/
$(document).ready(function(){
	if($('.shipstores-portfolio__slider-wrapper').length){
		var slide = $('.shipstores-portfolio__slider-wrapper li');

		setInterval(function(){
			var i = 1;
			slide.animate({
				left: '+=387'
			}, 1500, function(){
				if(i == slide.length){
					$('.shipstores-portfolio__slider-wrapper li:first-child').appendTo('.shipstores-portfolio__slider-wrapper').css('left','-774px');
				}
				i++;
			});

			//console.log($('.shipstores-portfolio__slider-wrapper li:first-child img').attr('src'));


		}, 4000);
	}
});

/*end of SCRIPT*/