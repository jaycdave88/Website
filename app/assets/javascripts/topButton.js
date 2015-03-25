$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$("#top").click(function(){
		$('html, body').stop().animate({scrollTop : 0},500);
		return false;
	});


