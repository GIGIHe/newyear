$(function(){
   
    // 判断游览器的类型是否为ie6 7 8 9
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    }
    if ((/msie [9|10]/i.test(navigator.userAgent))){
        // $(".c4conboxstep").show();
        // $(".c4conbox").css({
        //     borderWidth: '1px',
        //     borderStyle: 'dashed',
        //     borderColor: '#b4daf8'
        // })
    }
    var wow = new WOW({
        boxClass: 'wow', 
        animateClass: 'animated', 
        offset: 20, 
        mobile: true, 
        live: true 
    })
    //增加wow方法
    $.fn.extend({
        animateCss: function (animationName, callback) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
                if (callback) {
                    callback();
                }
            });
            return this;
        }
    });
    $('.details').mouseenter(function(){
        $(this).animateCss('shake');
    })
    // 右侧
    $('.close').click(function () {
        $(this).parent().slideUp(300, function () {
            $('.online').slideDown();
        });
    });
    $('.online').click(function () {
        $('.online').slideUp(300, function () {
            $('.fixed_r').slideDown();
        });

    });
        
	//返回顶部
	$(".fixedtop").click(function(){
                $("html,body").animate({scrollTop:0}, 500);
    })
    // a href 对应跳转位置的id
    $('.fixed a,.banner_box a').click(function () {
        $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
        });
    // top的固定
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop>50){
            $(".zgHead").removeClass('fixed');
        }else{
            $(".zgHead").addClass('fixed');
        }
    })

    $(".hjul li").each(function(index){
        $(this).mouseenter(function(){
            $(this).addClass('hover').siblings('li').removeClass('hover');
             $(".scien_inner").hide().eq(index).slideDown(500);
        })
    })
    $(".tabdl a").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('a').removeClass('hover');
             $(".table").hide().eq(index).fadeIn(200);
        })
    })
    $(".point1").click(function(){
        $("html , body").animate({scrollTop:$(".zgm1").offset().top},600);
    });
    	//类目筛选
	addColorFun(0)
	function addColorFun(e){
		$(".con1 .itemTab ul li").eq(e).addClass("active").siblings().removeClass("active");
		$(".itemtabBox ul li").each(function(){
			$(this).removeClass("active")
		})
		$(".itemtabBox ul li").each(function(){
			if(e == $(this).attr("data-num")){
				$(this).addClass("active")
			}
		})
	}
	$(".con1 .itemTab ul li").mouseenter(function() {
		var index = $(this).index();
		addColorFun(index)
		//fgkkAutoClickFun();
    })
    //课程类别选择
	$('.kcBox:first').show();
	var idd = window.location.hash.replace(/[^0-9]/ig,"");
	$(".con2 .lbList li").each(function(){
		var indx = $(this).attr('data-size');
		if(idd==indx){
			var txt = $(this).text();
			$(".con2 .lbList li").removeClass("on");
			$(this).addClass("on");
			$(".kcBox").hide();
			$(".kcBox:eq("+indx+")").stop(true,true).fadeIn();
		}
		$(this).click(function(){			
			var txt = $(this).text();
			$(".con2 .lbList li").removeClass('on');
			$(this).addClass('on');
			$('.kcBox').hide();
			$('.kcBox').eq(indx).show();
			//$(".zg_cenav").stop().animate({right:'-100%'});
		});
	});	
    
})

