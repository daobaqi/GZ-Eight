!function(a){
    "use strict";a.fn.jzoom=function(b){
        return this.each(function(){
            function s(b,c,e){
                var f,g,h,e=d.find("img").attr("src");
                return b=b||"_big",
                f=e.lastIndexOf(".")
                ,c=c||e.substring(f+1),
                g=e.substring(0,f)+b+"."+c,
                h=a("<img>").attr("src",g).css("position","absolute")}function t(){var a,b;
                    d.append(f).append(g),a=j.width()/d.width(),b=j.height()/d.height(),f.css({width:g.width()/a+"px",
                    height:g.height()/b+"px"}),
                    m=d.width()-f.outerWidth(),n=d.height()-f.outerHeight(),q=(j.width()-g.width())/m,r=(j.height()-g.height())/n
                    }
                    function u(a,b,c,d){
                        var e,f=a-b-c/2;return e=f>=0&&d>=f?f:0>f?0:d
                    }
                    var d,e,f,g,h,i,j,m,n,o,p,q,r,k,l,c={width:400,height:400,position:"right",offsetX:20,offsetY:0,opacity:.6,bgColor:"#fff",loading:"Loading..."};
                    switch(b=a.extend({},c,b),d=a(this),e=d.css("position"),
                    "static"===e&&d.css("position","relative"),
                    d.find("img").css({width:d.width()+"px",height:d.height()+"px"}),
                    f=a("<div></div>"),f.css({position:"absolute",
                    zIndex:"990",opacity:b.opacity,cursor:"move",border:"1px solid #ccc",backgroundColor:b.bgColor}),
                    g=a("<div></div>"),b.position){
                        case"top":h=0,i=-b.height-b.offsetY;break;
                        case"right":h=d.width()+b.offsetX,i=0;break;case"bottom":h=0,i=d.height()+b.offsetY;break;case"left":h=-b.width-b.offsetX,i=0
                    }
                    return g.css({left:h+"px",top:i+"px",
                    width:b.width+"px",height:b.height+"px",
                    position:"absolute",zIndex:"999",overflow:"hidden",
                    border:"1px solid #ccc",fontSize:"20px",textAlign:"center",
                    lineHeight:b.height+"px"}),j=s(b.suffixName,b.imgType),g.append(j).append(b.loading),
                    k=0,l=d.offset(),d.mouseenter(function(){f.show(),g.show(),0===k&&(t(),k++)})
                    .mousemove(function(a){o=u(a.pageX,l.left,f.width(),m),p=u(a.pageY,l.top,f.height(),n),
                        f.css({left:o+"px",top:p+"px"}),j.css({left:-o*q+"px",top:-p*r+"px"})}).mouseleave(function(){
                            f.hide(),g.hide()}),this})}
}(jQuery);
