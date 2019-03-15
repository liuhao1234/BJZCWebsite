
$(function(){
	var firstLoad = true;
	$.initNavActive();
	$.initIndexSlide();
	$(".pro-list .list-cell").mouseenter(function(){
		$(this).addClass("active").siblings(".list-cell").removeClass("active");
	})
	$('#fullpage').fullpage({
		sectionsColor: ['#f87b7b', '#fff', '#86d19f', '#77afe6', '#fff', '#fff', '#7fc9c3'],
		controlArrows: false,
		afterLoad: function(anchorLink, index){
			//导航动画
			var $navLine = $(".nav-line");
			$(".ws-nav-content ul li").eq(index-1).addClass("active").siblings("li").removeClass("active");
			if(index === 1){
				$(".ws-top-nav").removeClass("color-black");
				window.currentWidth = 72;
				window.commonWidth = 104;
				$navLine.animate({
					left:0,
					width:window.currentWidth,
				})
			}else{
				$(".ws-top-nav").addClass("color-black");
				window.currentWidth = 48;
				window.commonWidth = 76;
				$navLine.animate({
					left:window.currentWidth+window.commonWidth*(index-2),
					width:window.commonWidth,
				})
			}



			//首屏动画
			if(index === 1){
				$(".section").removeClass("section-active");
				$(".section01").addClass("section-active");
			}else if(index === 2){
				$(".section").removeClass("section-active");
				$(".section02").addClass("section-active");
			}else if(index === 3){
				$(".section").removeClass("section-active");
				$(".section03").addClass("section-active");
			}else if(index === 4){
				$(".section").removeClass("section-active");
				$(".section04").addClass("section-active");
			}else if(index === 5){
				$(".section").removeClass("section-active");
				$(".section05").addClass("section-active");
			}else if(index === 6){
				$(".section").removeClass("section-active");
				$(".section06").addClass("section-active");
			}else if(index === 7){
				$(".section").removeClass("section-active");
				$(".section07").addClass("section-active");
			}

		},
		onLeave: function(index, nextIndex, direction){
			
		},
	});


	var mySwiper = new Swiper ('#mienList', {
					    slidesPerView: 3,
				      	spaceBetween: 30
					})        

	$(".us-tab li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index()
		$(".us-detail").find("li").eq(index).fadeIn().siblings().hide();
	})
	$(".jobs-tab").find("span").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})

	//首页动画
	// $(".section01").removeClass("active");
	// setTimeout(function(){
	// 	$(".section01").addClass("active");
	// },1000)
	
	//跳转到相应的页面
	//$.fn.fullpage.moveTo(1);
})