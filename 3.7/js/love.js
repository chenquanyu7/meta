
   (function($){
          $.fn.slider=function(opt){
              var defaults={prevId:'',nextId:''};
              opt=$.extend({},defaults,opt);
               var w=$(this).find("li:first").outerWidth(true);
            var len=$(this).find("li").length;
            $(this).width(w*len);
            var that=$(this);
            $("."+opt.nextId).click(function(){
                  if(!that.is(":animated")){
                     that.animate({"marginLeft":-w+"px"},500,function(){
                         that.find("li:first").appendTo($(".pic"));
                         that.css("marginLeft","0");
                     });

                  }
                 
            })
            
             $("."+opt.prevId).click(function(){
                  if(!that.is(":animated")){
                      that.find("li:last").prependTo($(".pic"));
                       that.css("marginLeft",-w+"px");
                     that.animate({"marginLeft":0},500);

                  }
                 
            })
            
          }

    })(jQuery)
    $(function(){
           
        $(".pic").slider({
            prevId:"btn_l",
            nextId:"btn_r"
        });

    })
   