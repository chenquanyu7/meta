window.onload=function(){

$(function(){
	

var mySwiper = new Swiper('#lb1',{
     loop:true,
     pagination:".swiper-pagination",
     	autoplay:"2000",
	autoplayDisableOnInteraction:false,
     
})
})
var myListe=new Swiper("#list_lb2",{
	slidesPerView : 3,
spaceBetween : 20,
})
var list_lb=document.getElementById("list_lb");
var list_ul=document.getElementById("list_ul");
list_lb.addEventListener("touchstart",function(ev){
	ev.preventDefault();
})
var disx;
var leftx=0;
var wd=list_lb.offsetWidth;
var lw=list_ul.offsetWidth;
var w=wd-lw;
console.log(wd,w);
list_ul.addEventListener("touchstart",function(ev){
	disx=ev.changedTouches[0].pageX;
	leftx=this.offsetLeft;
	console.log(disx,leftx);
})
list_ul.addEventListener("touchmove",function(ev){
	
	list_ul.style.left=ev.changedTouches[0].pageX-disx+leftx+"px";
	if(this.offsetLeft>10){
		list_ul.style.left=10+"px";
	}
	if(this.offsetLeft<w){
		list_ul.style.left=w+"px";
	}
	
	console.log(list_ul.offsetLeft)
})
list_ul.addEventListener("touchend",function(ev){	
})
	

}
