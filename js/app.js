var nav = {
	trigger: ".menu-button",
	wrap: ".mast-head",
	init: function(){
		nav.bind();
	},
	bind: function(){
		$(document).on("click",nav.trigger,nav.open)

		$(document).on("click","#nav a", function(e){
			e.preventDefault();

			console.log($("body").css("right"));
			console.log(parseInt($("body").css("right")));

			if (parseInt($("body").css("right")) > 0) {
				$("body").removeClass("open");
			}

			$(window).scrollTo($(this).attr("href"),500);
		});

		$(document).on("click",".mast-head .logo", function(e){
			e.preventDefault();

			$(window).scrollTo(0,750);
		});
	},
	open: function(e){
		e.preventDefault();
		var target = "#faction";
		
		
		if ($("body").is(".open")) {
			$("body").removeClass("open");
		} else {
			if ($(window).scrollTop() < $("#splash").height()) {
				$(window).scrollTo(target, 500);
			}
			$("body").addClass("open");
		}

	}
}



var parallax = {
	init: function(){
		parallax.bind();
	}, 
	bind: function(){
		$(window).scroll(parallax.run);
	},
	run: function(){
		var scrolled = $(window).scrollTop();

		if (scrolled < 400) {
			$(".js-parallax").each(function(){
				var moveTo = $(this).attr("data-400")*(scrolled/400)
				$(this).css({
					top: moveTo
				});
			});
		}
	}

}

$(document).ready(function(){
	nav.init();

	if (!Modernizr.touch) {
		parallax.init();
	}

	faction.init();

	bar.init();

	ajaxForm.init();
});

