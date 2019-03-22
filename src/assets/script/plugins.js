$.extend({
	initNavActive:function(){
		var currentIndex = 1;
		window.currentWidth = 72;
		window.commonWidth = 104;
		var overTimer = null;
		var $navLine = $(".nav-line");
		
		//moveLine(index)
		$(".ws-nav-content ul li").mouseenter(function(){
			clearTimeout(overTimer);
			var index = $(this).index();
			moveLine(index)
		})
		$(".ws-nav-content ul li").mouseleave(function(){
			overTimer = setTimeout(function(){
				//var index = $(this).index();
				moveLine(currentIndex)
			},100)
		})

		$(".ws-nav-content ul li").click(function(){
			clearTimeout(overTimer);
			var $this = $(this);
			var index = $this.index();
			currentIndex = index;
			window.currentWidth = index===1?72:48;
			window.commonWidth = index===1?104:76;
			moveLine(index);
			$this.addClass("active").siblings("li").removeClass("active");

			$.fn.fullpage.moveTo(index);
		})

		function moveLine(index){
			var width = index===1?window.currentWidth:window.commonWidth;
			var left = index===1?0:(window.currentWidth+window.commonWidth*(index-2));

			//$this.addClass("active").siblings("li").removeClass("active");
			$navLine.animate({
				left:left,
				width:width,
			})
		}
	},

	initIndexSlide:function(){
		$(".slide-guide li").click(function(){
			var index = $(this).index();
			$(this).addClass("active").siblings("li").removeClass("active");
			$.fn.fullpage.moveTo(1,index);
		})
	},

	initJobListEx:function(){
		$(".job-table").find("ul").not(":first").click(function(){
			$(this).next().slideDown().siblings("dl").slideUp();
		})
	}
})