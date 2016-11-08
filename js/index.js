//浏览器检测
(function(){
    function isMobile(){
        return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ? !0 : /(Android)/i.test(navigator.userAgent) ? !0 : !1;
    }

    var html=document.getElementsByTagName('html')[0];
    var str;
    if(isMobile()){
      window.isMobile=1;
        str='MC';
    }else{
      window.isMobile=0;
        str='PC';
    }
//添加浏览器类型判断
    html.className=html.className?html.className + " "+str:str;
    var htmlClass=html.className;

    function resize(html){
        var c = "";
        //检测屏幕宽度
        var d = document.documentElement.clientWidth;
        1600 > d && (c += " lt1600");
        1400 > d && (c += " lt1400");
        1200 > d && (c += " lt1200");
        1e3 > d && (c += " lt1000");
        960 > d && (c += " lt960");
        640 > d && (c += " lt640");
        500 > d && (c += " lt500");
        400 > d && (c += " lt400");
        1600 < d && (c += " gt1600");
        1400 < d && (c += " gt1400");
        1200 < d && (c += " gt1200");
        1e3 < d && (c += " gt1000");
        960 < d && (c += " gt960");
        640 < d && (c += " gt640");
        500 < d && (c += " gt500");
        400 < d && (c += " gt400");
        html.className = htmlClass + c;
    }
    resize(html);
    window.onresize = function(event) {
        resize(html);
    };

})();