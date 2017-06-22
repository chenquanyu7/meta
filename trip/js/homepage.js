window.onload=function(){
	$(function(){
		var mySwiper=new Swiper("#lbbox",{
		loop:true,
		pagination:".swiper-pagination",
		autoplay:"3000",
		autoplayDisableOnInteraction:false,
	})
		Vue.component("todo-item",{
			props:["todo"],
			template:"<li>{{todo.text}}<i class='right_jt'></i></li>"
		})
		var app=new Vue({
			el:"#app",
			data:{
				items:[
				{text:"签证"},
				{text:"机票"},
				{text:"旅游"},
				{text:"攻略"},
				{text:"酒店"},
				{text:"门票"},
				{text:"优惠券"},
				{text:"WiFi"}
				]
			}
		})
	})
	$(".top_left").on("click",function(){
		$("#onebox").css("display","block");
		$("#twobox").css("display","none");
	})
	$("#search").on("click",function(){
		$("#onebox").css("display","none");
		$("#twobox").css("display","block");
	})
}
