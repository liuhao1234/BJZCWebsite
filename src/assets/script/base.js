$(function(){
	$('#fullpage').fullpage({
		sectionsColor: ['#f87b7b', '#fff', '#86d19f', '#77afe6', '#fff', '#fff', '#7fc9c3'],
		controlArrows: false,
	});
	
	//跳转到相应的页面
	$.fn.fullpage.moveTo(7);
})