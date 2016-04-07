$(document).ready(function(){

	var animatedScroll = function(){
		$('.reach').click(function(e){
			e.preventDefault();
			var $target = $(this.hash);
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').delay(80).animate({scrollTop: targetOffset}, 350);
				return false;
			}
		});
	}();
	
	var jsfix = function(){
		$('a, button').each(function(){
			title = $(this).text();		
			$(this).attr('title', title);

			$('a').click(function(e){
				if($(this).attr('href') == '#'){
					e.preventDefault();
				}
			});
		});
		$('.news-image a').each(function(){
			title = $(this).children('span').text();		
			$(this).attr('title', title);
		});

	}();

	var front = function(){
		$('.login-button').click(function(){
			if($('.header-login-form').hasClass('hidded')){
				$('.header-login-form').removeClass('hidded')
				$('.header-login-form').fadeIn(250);
			}else{
				$('.header-login-form').addClass('hidded')
				$('.header-login-form').fadeOut(250);
			}
		});

		$('.section').click(function(){
			$('.header-login-form').addClass('hidded')
			$('.header-login-form').fadeOut(250);
		});

		var hheight = $('.header-support').height();

		$(window).scroll(function(){
			if($(this).scrollTop() >= hheight){
				$('.header-nav').addClass('fixed-nav');
			}else{
				$('.header-nav').removeClass('fixed-nav');
			}
		});

	}();




});//end