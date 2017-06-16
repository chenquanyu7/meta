window.onload=function(){
$(function(){
	$(".kuaiguai").on("tap",function(){
		var x=$(this).find("small").position();
		var m=$(this).width()-$(this).find("small").width();
		if(x.left==0){
			$(this).find("small").css("left",m+"px");
			$(this).css("background","#CCCCCC");
		}
		else{
			$(this).find("small").css("left","0");
			$(this).css("background","rgb(76, 175, 80)");
		}
	})
	$(".go"),addEventListener("touchstart",function(ev){
		ev.preventDefault();
	})
	$(".back").on("tap",function(){
		console.log("aaa");
	location.href="shangcheng.html";
	})
})
	
}
