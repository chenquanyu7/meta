$(function(){
	var w=$(".pic li").outerWidth(true);
	console.log(w);
	var len=$(".pic li").length;
	
	$(".pic").css("width",len*w+"px");
	$(".btn_r").click(function(){
		$(".pic").stop().animate({marginLeft:(-w+"px")},500,function(){
			$(".pic").find("li:first").appendTo($(".pic"));
			$(".pic").css("marginLeft","0");
		})
	})
	$(".btn_l").click(function(){
		$(".pic").find("li:last").prependTo($(".pic"));
		$(".pic").css("marginLeft",(-w+"px"));
		$(".pic").animate({marginLeft:"0"},500);
		
		
		
	})
	$(".pic li").each(function(i){
		$(this).attr("value",i);
	});
	$(".pic li").click(function(){
		console.log($(this).attr("value"));
		var index=$(this).attr("value");
		$(".aboutbox").show();
		$(".aboutbox").find("ul").eq(index).addClass("on").siblings().removeClass("on");
		var lens=$(".aboutbox .on").find("li").length;
		var ws=$(".aboutbox .on").find("li").outerWidth(true);
		$(".photo_box .on").css("width",lens*ws+"px");
	    $(".next").click(function(){
//	    	
           $(".aboutbox").find("ul").eq(index).animate({marginLeft:(-ws)+"px"},500,function(){
           	$(".aboutbox").find("ul").eq(index).find("li:first").appendTo($(".aboutbox").find("ul").eq(index));
           	$(".aboutbox").find("ul").eq(index).css("marginLeft","0");
           })
         
	    	
	    })
	    $(".prev").click(function(){
	    	$(".aboutbox").find("ul").eq(index).css("marginLeft",(-ws)+"px");
	    	$(".aboutbox").find("ul").eq(index).find("li:last").prependTo($(".aboutbox").find("ul").eq(index));
	    	$(".aboutbox").find("ul").eq(index).animate({marginLeft:"0"},500)
	    })
	    $(".close").click(function(){
	    	$(".aboutbox").hide();
	    })
		
	})
	
})
   