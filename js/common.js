// Posts...
		var postsTop;
		var winHeight;

$(document).ready(function(){
	// posts vars
	postsTop = $('.posts').offset().top;
	winHeight = $(window).height();

})

	function posts(x){
		var goal = postsTop - winHeight/8;
		var offset;
		if(x<goal){
			offset = Math.min(0.005*Math.pow(x - goal, 2), winHeight);
		}else{
			offset = 0;
		}
		$('.left').css({
			'transform': 'translate(-'+ offset *0.6+'px, 0px)'
		});

		$('.right').css({
			'transform': 'translate('+Math.abs(offset*0.6)+'px, 0px)'
		})
	}




// Scroll effects

$(window).scroll(function () {

	var scrollTop = $(this).scrollTop();


// header...

	var header = function(){
		if(scrollTop<300){
			$('header').css({
			'transform' : 'translate(0%,' + scrollTop/3.6 +'%'
			});
		}
	};

// Goods menu...

	var goodsMenu = function(){


		var goodsMenuShower = function(){
			$('.item').each(function(i){
					setTimeout(function(){
						$('.item').eq(i).addClass('is-showing')
					}, 450* (i+1));
					})
		}
		
		// var goodsMenuRemover = function(){
		// 	$('.item').each(function(){
		// 		$('.item').removeClass('is-showing')
		// 	})
		// }

		var x = true;
		switch(x){
			case scrollTop > $('#goods').offset().top - 220:
				goodsMenuShower();
				break;
		}
	};

// Section 2 parallax...

	$('#sect_2').css({
		'transform' : 'translate(0%, ' + scrollTop/68 +'%'
	});
//History
	// var history = function(){
	// 	if(scrollTop<480){
	// 		$('header').css({
	// 		'transform' : 'translate(0%,' + scrollTop/4 +'%'
	// 		});
	// 	}
	// }

	// posts
	// if(scrollTop> $('.posts').offset().top - $(window
	// 	).height()){

	// 	var offset = Math.min(0, scrollTop - $('.posts').offset().top
	// 		+$(window).height() -700);

	// 	$('.left').css({
	// 		'transform': 'translate('+ offset *0.5+'px, 0px)'
	// 	});

	// 	$('.right').css({
	// 		'transform': 'translate('+Math.abs(offset*0.5)+'px, 0px)'
	// 	})
	// }


	posts(scrollTop)
	header();
	goodsMenu();
});


// Pop-up effects


$(document).ready(function(){



	$('.item').magnificPopup({
		items:{
		src: '#test-popup',
		type: 'inline'
	}
	});

	$('.footerwrp a').magnificPopup({
		items:{
		src: '#test-popup',
		type: 'inline'
		}
	});

	$('button').magnificPopup({
		items:{
		src: '#test-popup',
		type: 'inline'
		}
	});


// Smooth anchor link
	$('.header-menu a').click(function(e){
		var linkhref = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(linkhref).offset().top
		}, 1300);

		e.preventDefault();
	});
// button hover effects

	handlerIn = function(){
		$(this).addClass('pulse');
	}
	handlerOut = function(){
		$(this).removeClass('pulse');
	}
	$('button').mouseenter( handlerIn ).mouseleave( handlerOut );

})


