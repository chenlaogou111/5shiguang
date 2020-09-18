function goToTop(){
	$(function(){
		$(window).scroll(function(){
			 if($(window).scrollTop() > 100){
			 	$('#goTop').css('opacity','0.7');
			 }else{
			 	$('#goTop').css('opacity','0');
			 }
		})
	});
	
	$('#goTop').on('click',function(){
		$('html,body').animate({
			scrollTop: 0
		},600);
		return false;
	});
}