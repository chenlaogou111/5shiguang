$(function(){
	include("header",clickTransition);
	include("carousel",mouseslide);
});
function include(selecter,callback,call){
	if($('#' + selecter).length) {
		$('#' + selecter).load('public/' + selecter + '.html',callback);
	}
}