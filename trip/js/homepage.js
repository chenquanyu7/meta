var app;
//Vue.component("todo-item",{
//			props:["items"],
//			template:"<li v-for='item of items'>{{item}}<i class='right_jt'></i></li>"
//		})
	$(function(){
		var mySwiper=new Swiper("#lbbox",{
		loop:true,
		pagination:".swiper-pagination",
		autoplay:"3000",
		autoplayDisableOnInteraction:false,
	})
		
		app=new Vue({
			el:"#app",
			data:{
				items:[
				"签证",
				"机票",
				"旅游",
				"攻略",
				"酒店",
				"门票",
				"优惠券",
				"WiFi"
				]
			}
		});
		$("#txt").keyup(function(){
     		if($(this).val()!=""){
//       $.getJSON("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+$(this).val()+"&cb=?"
         $.getJSON("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+$(this).val()+"&cb=?"
         ,function(data){
  
     		       var datas=data.s;

                   console.log(datas);
     		      	datas.length=8;
     		      	app.items=datas
     		      	console.log(app.items);
     		      	$("#app li").click(function(){
     		      		$("#txt").val($(this).text());
     		      		$("#app").html("");
     		      		location.href="https://www.baidu.com/s?wd="+$("#txt").val();
     		      	})
//   		       $.each(datas,function(index,ele){
//   		       	console.log(ele);
//   		       	 console.log(index);
//   		       	 str+="<li>"+ele[index]+"<i class='right_jt'>"
//   		       	$("<li>").html(ele).click(function(){
////   		       		str +='<li><a href="https://www.baidu.com/s?wd='+ele+'" target=_blank>'+ele+'</a></li>';
//   		       		$("#txt").val(ele);
//   		       		$("#app").html("");
//   		       		location.href="https://www.baidu.com/s?wd="+$("#txt").val();
//   		       	}).appendTo($("#app"));
     		       	  
//   		       })

     			})
//       $("#but").click(function(){
//       	location.href="https://www.baidu.com/s?wd="+$("#txt").val();
//       })
     		}
     	})
			
	$(".top_left").on("click",function(){
		$("#onebox").css("display","block");
		$("#twobox").css("display","none");
		$("#txt").val("");
	})
	$("#search").on("click",function(){
		$("#onebox").css("display","none");
		$("#twobox").css("display","block");
	})

})