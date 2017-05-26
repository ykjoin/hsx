$(function(){
	var str = "移动互联，商机无限，创新链接，尽在指尖!"
	$(".list").text("")
	var a=0;
	var yk = setInterval(function(){
		$(".list").text(str.substr(0,a)+"|");
		a++;
		if(a==str.length){
			$(".list").text(str.substr(0,a));
			clearInterval(yk)
		}
	},300)
})
$(function(){
	$(".img1,.img2,.img3").css({
		left:300,
		width:370,
		bottom:-50
	})
	$(".img2").animate({
		left:600,
		bottom:-30,
		width:370
	})
	$(".img3").animate({
		left:0,
		bottom:-30,
		width:370
	})
	$(".img1").animate({
		width:412,
		zIndex:2
	})
	})
$(function(){
	$(".nihao img").on("click",function(){
		var index = $(this).index();
		console.log(index)
		if(index==2){
			kk();
		}else if(index==0){
			$(".nihao").append($(".nihao img").eq(0))
			$(".center img").eq(2).animate({
					left:600,
					bottom:-30,
					width:370,
					zIndex:1
			})
			$(".center img").eq(1).animate({
					left:300,
					bottom:-50,
					width:412,
					zIndex:2
				})
			$(".center img").eq(0).animate({
					left:0,
					bottom:-30,
					width:370,
					zIndex:1
			})
		}
})
	var yk = setInterval(kk,2000)
	
	$(".nihao img").on("mousemove",function(){
		clearInterval(yk)
	})
	$(".nihao img").on("mouseout",function(){
		yk = setInterval(kk,2000)
	})
	function kk(){
		$(".nihao img").eq(2).animate({
					left:0,
					bottom:-30,
					width:370,
			})
			$(".nihao img").eq(1).animate({
					left:600,
					bottom:-30,
					width:370,
					zIndex:1
				})
			$(".nihao img").eq(0).animate({
					left:300,
					bottom:-50,
					width:412,
					zIndex:2
				})
			var a = $(".nihao img").eq(2)
			$(".nihao").prepend(a)
	}
})
$(function(){
	$(document).on("scroll",function(){
		var a= $(document).scrollTop();
		if(a>600){
			$(".header").css({
				position:"fixed",
				background:"rgba(22,116,200,0.7)",
				animation:"name 1s"
			})
			$(".center").css({
				paddingTop:60
			})
		}else{
			$(".header").css({
				position:"static",
				background:"rgb(22,116,200)",
				animation:"none"
			})
			$(".center").css({
				paddingTop:0
			})
		}
	})
})