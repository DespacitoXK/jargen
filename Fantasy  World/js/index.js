var i=0;
var arr=["DRAGON&nbsp;&nbsp;FIN&nbsp;&nbsp;SOUP&nbsp;&nbsp;RIDDING","GIRL&nbsp;&nbsp;DRAGON&nbsp;&nbsp;FANTASY&nbsp;&nbsp;SWORD&nbsp;&nbsp;WING","DANGER&nbsp;&nbsp;BEAR&nbsp;&nbsp;GUY&nbsp;&nbsp;PISTOL&nbsp;&nbsp;MOMENT"]
var imgs=$(".Wpting img");
$(".Wpting p").click((e)=>{
    var target=e.target;
    if($(target).html()=="-&gt;"){
        console.log(1);
        i++;
        if(i==imgs.length){
            i=0;
        }
        $(".dt").html(`${arr[i]}`);
        imgs.removeClass("show");
        $(imgs[i]).addClass("show");
    }else{
        console.log(2);
        i--;
        if(i==-1){
            i=imgs.length-1;
        }
        $(".dt").html(`${arr[i]}`);
        imgs.removeClass("show");
        $(imgs[i]).addClass("show");
    }
})

$(".form_input").click(function(){
    $(".nav-right form").submit(function(){
        return true;
    })
})






//点击按钮;
function lb(){
    $(".GJ_LB img").removeClass();
    $($(".GJ_LB img")[z]).addClass("active_img");
    $(".LATEST_button button").click(function(){
        if($(this).html()=="→"){
            z++;
            if(z==9){
                z=0
            }
            if(z==8){
                $(".LATEST_ul").css("bottom","0px");
                $(".ul_img li img").removeClass();
                $($(".ul_img li img")[z]).addClass("ssactive_img");
            }
            $(".ul_img li img").removeClass();
            $($(".ul_img li img")[z]).addClass("ssactive_img");
            $(".GJ_LB img").removeClass();
            $($(".GJ_LB img")[z]).addClass("active_img");
        }else{
            z--;
            if(z==-1){
                z=8
            }
            if(z==0){
                $(".LATEST_ul").css("bottom","0px");
                $(".ul_img li img").removeClass();
                $($(".ul_img li img")[z]).addClass("ssactive_img");
            }
            $(".ul_img li img").removeClass();
            $($(".ul_img li img")[z]).addClass("ssactive_img");
            $(".GJ_LB img").removeClass();
            $($(".GJ_LB img")[z]).addClass("active_img");
        }
    })
    $(".span_img").click(function(){
        $(".LATEST_ul").css("bottom","-180px")
    })
    $(".show_img").click(function(){
        $(".LATEST_ul").css("bottom","0px")
    })
}
//点击模态框图片;
function lbtow(){
    $(".ul_img li").click(function(){
            z=$(this).index();
            $(".ul_img li img").removeClass();
            $($(".ul_img li img")[z]).addClass("ssactive_img");
            $(".GJ_LB img").removeClass();
            $($(".GJ_LB img")[z]).addClass("active_img");
        });
    }
lbtow();
////点击页面图片;
function Latest(){
    $(".LATEST_botn ul li").click(function(){
        $(".LATEST_MT").slideDown(500);
        $("body").css("overflow","hidden");
        z=$(this).index();
        lb(z);
    })
}
Latest();
$(".colosed_img").click(function(){
    $("body").css("overflow","");
    $(".LATEST_MT").slideUp(500);
});


//喽bi轮播;
var pig=0;
$(".dinG p").click(function(){
    // console.log($(this).html())
    if($(this).html()=="NEXT"){
        console.log(1);
        if(pig==0){
            $(".NEWS_LB_BX").css("transform","translateX(-12.5%)");
            pig++;
        }else if(pig==1){
            $(".NEWS_LB_BX").css("transform","translateX(-25%)");
            pig++
        }else if(pig==2){
            $(".NEWS_LB_BX").css("transform","translateX(-37.5%)");
            pig++
        }else if(pig==3){
            $(".NEWS_LB_BX").css("transform","translateX(-50%)");
            pig++;
        }else if(pig==4){
            $(".NEWS_LB_BX").css("transform","translateX(0%)");
            pig=0;
        }
    }else{
        if(pig==0){
            $(".NEWS_LB_BX").css("transform","translateX(-50%)");
            pig=4;
        }else if(pig==4){
            $(".NEWS_LB_BX").css("transform","translateX(-37.5%)");
            pig--;
        }else if(pig==3){
            $(".NEWS_LB_BX").css("transform","translateX(-25%)");
            pig--;
        }else if(pig==2){
            $(".NEWS_LB_BX").css("transform","translateX(-12.5%)");
            pig--;
        }else if(pig==1){
            $(".NEWS_LB_BX").css("transform","translateX(0%)");
            pig=0;
        }
    }
});
tanmer=setInterval(()=>{
    if(pig==0){
        $(".NEWS_LB_BX").css("transform","translateX(-12.5%)");
        pig++;
    }else if(pig==1){
        $(".NEWS_LB_BX").css("transform","translateX(-25%)");
        pig++
    }else if(pig==2){
        $(".NEWS_LB_BX").css("transform","translateX(-37.5%)");
        pig++
    }else if(pig==3){
        $(".NEWS_LB_BX").css("transform","translateX(-50%)");
        pig++;
    }else if(pig==4){
        $(".NEWS_LB_BX").css("transform","translateX(0%)");
        pig=0;
    }
},1500);
$(".NEWS_LB").mouseenter(()=>{
    clearInterval(tanmer);
});
$(".dinG").mouseenter(()=>{
    clearInterval(tanmer);
});
$(".NEWS_LB").mouseleave(()=>{
    tanmer=setInterval(()=>{
        if(pig==0){
            $(".NEWS_LB_BX").css("transform","translateX(-12.5%)");
            pig++;
        }else if(pig==1){
            $(".NEWS_LB_BX").css("transform","translateX(-25%)");
            pig++
        }else if(pig==2){
            $(".NEWS_LB_BX").css("transform","translateX(-37.5%)");
            pig++
        }else if(pig==3){
            $(".NEWS_LB_BX").css("transform","translateX(-50%)");
            pig++;
        }else if(pig==4){
            $(".NEWS_LB_BX").css("transform","translateX(0%)");
            pig=0;
        }
    },1500);
});
$(".dinG").mouseleave(()=>{
    tanmer=setInterval(()=>{
        if(pig==0){
            $(".NEWS_LB_BX").css("transform","translateX(-12.5%)");
            pig++;
        }else if(pig==1){
            $(".NEWS_LB_BX").css("transform","translateX(-25%)");
            pig++
        }else if(pig==2){
            $(".NEWS_LB_BX").css("transform","translateX(-37.5%)");
            pig++
        }else if(pig==3){
            $(".NEWS_LB_BX").css("transform","translateX(-50%)");
            pig++;
        }else if(pig==4){
            $(".NEWS_LB_BX").css("transform","translateX(0%)");
            pig=0;
        }
    },1500);
});
$(".CONTACT_iput_botn_left div").click(function(){
    $(".CONTACT_iput_botn_left div input").removeClass();
    $(".CONTACT_iput_botn_left div").removeClass("div_input");
    $(this).addClass("div_input");
    $(this).children().next().addClass("input_col");
})