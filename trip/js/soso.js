window.onload = function() {
	$(function() {
		  FastClick.attach(document.body);
		var n = 0;
		$(".xzhuan").on("tap",function() {
			n++;
			//		v=$("#txtone").val();
			//		$("#txtone").val($("#ttxtwo").val());
			//		$("#ttxtwo").val(v);

			$(this).css("transform", "rotate(" + n * 360 + "deg)")
			$("#txtone").toggleClass("tr");
			$("#ttxtwo").toggleClass("tl");
		});
//		$(".but").on("tap",function(){
//		
//		});
		$(".back_one").on("tap",function(){
			$("#box").css("display","block");
			$("#twobox").css("display","none");
		});
		
//		 $(".lists").html("");
				$(".but").on("tap",function(){
			
				$("#box").css("display","none");
			$("#twobox").css("display","block");
		
		var inp=$("#txtone").val();
		var ipo=$("#ttxtwo").val();
	
//		var urlByStartEnd=`http://proxy.e12e.com/?http://www.webxml.com.cn/WebServices/TrainTimeWebService.asmx/
//getStationAndTimeByStationName?UserID=3fc2bdeada6847e79d83d4c8940ff5c9`;
//$.get("http://proxy.e12e.com/?http://www.webxml.com.cn/WebServices/TrainTimeWebService.asmx/getStationAndTimeByStationName?StartStation=长沙&ArriveStation=广州&UserID=75f58aa83d8d47efb16c41040d7e7764",
//	   function(data){
	if(inp!="" && ipo!=""){
		$.get("http://proxy.e12e.com/?http://ws.webxml.com.cn/WebServices/TrainTimeWebService.asmx/getStationAndTimeByStationName?UserID=86e1ae702ed5465d9b59be1f1f64cce4",
	   {StartStation:inp,ArriveStation:ipo},function(data){
	   	console.log($(data));
	   	console.log(data);
	   	var str="";
	 console.log($(data).find("FirstStation").text());
     	$(data).find("TimeTable").each(function(index,obj){
     		  	
	   	var stime=$(obj).find("StartTime").text();//开始时间
	   	var bc=$(obj).find("TrainCode").text();//班次
	   	var ustime=$(obj).find("UseDate").text();//耗时
	   	var daoda=$(obj).find("ArriveTime").text();//到达时间
	   	var zdian=$(obj).find("LastStation").text();//终点站
	   	var qdian=$(obj).find("FirstStation").text();//起点站
	   		if(index>10) return;	
//	   	str+="<li><h3><span class='bco'>"+bc+"</span>&nbsp;<span>"+(qdian+"-"+zdian)+"<span><h3>";
//	   	str+="<p><span>出发时间:"+stime+"</span><br/>到达时间<span>"+daoda+"</span>"+"</p>";
//	   	str+="<p>总用时:"+ustime+"</p></li>";
        str+="<li><div class='t_box'><div><p>"+qdian+"</p><p>"+stime+"</p></div><div><p>"+bc+"</p>";
        str+="<p>"+ustime+"</p></div><div><p>"+zdian+"</p><p>"+daoda+"</p></div><div><em>¥</em><strong>139</strong>起";
        str+="</div></div><div class='b_box'><a href='#'>硬座:0张<span>(抢)</span></a><a href='#'>硬卧:99张</a>";
        str+="<a href='#'>软卧:4张</a></div></li>";
	   	})

        $(".lists").html(str);
//      <li>
//					<div class="t_box">
//						<div>
//							<p>海口</p>
//							<p>11:14</p>
//						</div>
//						<div>
//							<p>Z386</p>
//						    <p>11时12分</p>
//						</div>
//						<div>
//							<p>广州</p>
//							<p>
//                    22:26
//							</p>
//						</div>
//						<div><em>¥</em>
//							<strong>139</strong>
//							起
//						</div>
//					</div>
//					<div class="b_box">
//						<a href="">硬座:0张<span>(抢)</span></a>
//						<a href="">硬卧:99张</a>
//						<a href="">软卧:4张</a>
//						
//						
//						
//					</div>
//				</li>
//      
//   
	   })
	}
	
	})
	})

}
