window.onload=function(){
//	var set=document.getElementById("set");
//	set.addEventListener("touchstart",function(ev){
//		ev.preventDefault();
//	})
	
	$(function(){
		var j=0;
	    var n=0;
		$(".img_zhuan").on("tap",function(){
			n++;
			$(this).css("transform","rotate("+n*720+"deg)");
			$.ajax({
				type:"get",
				url:"choose.json",
				dataType:"json",
				success:function(data){
					console.log(data);
					var arr=data.list;
					console.log(arr);
					var str="";
		for(i=0;i<5;i++){
	str+="<li><a><div class='imgleft'><img src='"+arr[j].imges+"'></div>";
	str+="<div class='imgright'><p>"+arr[j].title+"</p><p>"+arr[j].make+"</p>";
	str+="<p><span>"+arr[j].sale+"</span></p><p><span>优选价￥</span><em>"+arr[j].price+"</em></p>";
	str+="<p><span>原价</span>￥<span>"+arr[j].cost+"</span></p></div></a></li>";
	j++;
	console.log(j);
					}
					if(j==arr.length){
                       j=0;
					}
					$(".list_ul").html(str);
					
					
				}
			});
		}).trigger("tap");
		$(".mulu").on("tap",function(){
			$(".box").css("transform","translate3d(-50%,0,0)")
		})
		$(".back").on("tap",function(){
			$(".box").css("transform","translate3d(0,0,0)")
		})
		$(".disnone").on("tap",function(){
			$(".right_list").html("");
			$.get("choose.json",function(data){
				var arrtwo=data.list;
				console.log(arrtwo);
				var strtwo="";
				var values=$(".inp").val();
				
				for(var i=0;i<arrtwo.length;i++){
//					$(".right_list").html("");
					if(arrtwo[i].title==values){
						
	strtwo+="<li><a><div class='imgleft'><img src='"+arrtwo[i].imges+"'></div>";
	strtwo+="<div class='imgright'><p>"+arrtwo[i].title+"</p><p>"+arrtwo[i].make+"</p>";
	strtwo+="<p><span>"+arrtwo[i].sale+"</span></p><p><span>优选价￥</span><em>"+arrtwo[i].price+"</em></p>";
	strtwo+="<p><span>原价</span>￥<span>"+arrtwo[i].cost+"</span></p></div></a></li>";
	$(".right_list").html(strtwo);
				}
//					else{
//						
//						strtwo="<li class='lit'><img src='img/1.png'/><p class='ps'>抱歉，没有相关信息!</p></li>";
//						$(".right_list").html(strtwo);
//					}
				
				}
				if($(".right_list li").length==0){
						strtwo="<li class='lit'><img src='img/1.png'/><p class='ps'>抱歉，没有相关信息!</p></li>";
						$(".right_list").html(strtwo);
					}
			})
		})
		
	})
	
}
//<li>
//		    		<a href="">
//		    			<div class="imgleft">
//		    			<img src="img/f28.jpg"/>
//		    		</div>
//		    		<div class="imgright">
//		    			<p>养生陶瓷汤锅</p>
//		    			<p>节能省事，炖煮一锅搞定</p>
//		    			<p><span>4.3折</span></p>
//		    			<p><span>优选价￥</span><em>24.5</em></p>
//		    			<p><span>原价</span>￥<span>199</span></p>
//		    		</div></a>
//		    	</li>	 
