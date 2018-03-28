slider = 1;
sliderNext = 2;
$(document).ready(function () {
	$('#slider>img#1').fadeIn(400);
	startSlider();
});

function startSlider(){
	count = $('#slider>img').length;

	loop = setInterval(function(){

		if(sliderNext>count){
			sliderNext =1;
			slider =1;
		}
		$('#slider>img').fadeOut(400);
		$('#slider>img#' + sliderNext).fadeIn(400);


		slider = sliderNext;
		sliderNext = sliderNext +1;

	},3000)
};

function prev(){
	newSlide = slider - 1;
	showSlide(newSlide);
}
function next() {
	newSlide = slider + 1;
	showSlide(newSlide);
}
function stopLoop(){
	window.clearInterval(loop);
}
function showSlide(id) {
		stopLoop();
		if(id>count){
			id=1;
		}else if(id<1){
			id = count;
		}

		$('#slider>img').fadeOut(400);
		$('#slider>img#' + id).fadeIn(400);


		slider = id;
		sliderNext = id +1;
		startSlider();
}
$("#slider > img").hover(
	function ()
	{
	stopLoop ();
	},
	function ()
	{
	startSlider ();
	}
 );