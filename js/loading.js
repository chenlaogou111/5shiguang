$(function(){
	/*
		每刷新一次页面window.name + 1
		找到id为loading里的.loading-top加类名
		给下一个元素加类名
		如果刷新移除loading
	*/
	window.name = Number(window.name) + 1;
	if(window.name === "1"){
		var html = '<div class="loading" id="loading">'+
				'<div class="loading-top loading-top-animate"></div>'+
				'<div class="loading-middle loading-middle-animate"></div>'+
				'<div class="loading-bottom loading-bottom-animate"></div>'+
			'</div>';
		$('body').prepend(html);
		setTimeout(function(){
			$('#loading').remove();
		},1000);
	}
	
});