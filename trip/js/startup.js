 $(function(){
 Vue.component("startup",{
 	template:`<ul id='lists'>
 	<li><img src='img/q1.jpeg'></li>
 	<li><img src='img/q2.jpeg'></li>
 	<li><img src='img/q3.jpeg'></li>
 	<li><img src='img/q4.jpeg'>
 	<a href='' class='loding'>进入购票</a>
 	</li>
 	</ul>`
 })
 var app=new Vue({
 	el:"#app",
 	data:{
 		
 	}
 })
 $("#app")[0].addEventListener("touchstart",function(ev){
 	ev.preventDefault();
 })
 var n=0;
 var size=$("#lists").find("li").length;
 console.log(size);
 var w=$(window).width();
 console.log(w);
 $("#app").on("swipeLeft",function(){
 	n++;
 	if(n>=size){
 		n=size-1;
 	}
 	$("#lists").css("-webkit-transform","translate3d("+(-n*w)+"px,0,0)");
 	
 })
 $("#app").on("swipeRight",function(){
 	n--;
 	if(n<=0){
 		n=0;
 	}
 	$("#lists").css("-webkit-transform","translate3d("+(-n*w)+"px,0,0)");
 })
 $(".loding").on("tap",function(){
 	location.href="https://chenquanyu7.github.io/meta/trip/homepage.html";
 })
 })
