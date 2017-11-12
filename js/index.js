	
/*header*/
(function(){
	var $hr=$('#header .h_main .h_right');
	var $gouwu=$hr.find('.h_gou');
	var $hide=$hr.find('.h_hide');
	$hr.hover(function(){
		$gouwu.addClass('hover');
		$hide.stop().slideDown(300);
	},function(){
		$gouwu.removeClass('hover');
		$hide.stop().slideUp(300);
	});
})();

/*nav*/
(function(){
	var $nav=$('#nav .n_nav ul');
	var $hide=$('#hide');
	var $ul=$('#hide ul');
	var $li=$('#nav .n_nav ul .list');
	$li.hover(function(){
		$hide.stop().slideDown();
		$ul.eq( $(this).index() ).show().siblings().hide();
	},function(){
		$hide.stop().slideUp();
	});
	$hide.hover(function(){
		$(this).stop().slideDown();
	},function(){
		$(this).stop().slideUp();
	});
	
})();
/*nav search*/
(function(){
	var $input=$('#search input');
	var $search=$('#search');
	var $a=$('#search > a');
	var $hide=$('#search .s_hide');
	$input.on('focus blur',function(){
		$search.toggleClass('focus');
		$a.fadeToggle(300);
		$hide.fadeToggle(300);
	});
})();
/*banner*/
(function(){
	var $Li=$('#banner .banner .tab ul li');
	var length=$Li.length;
	var $img=$('#banner .banner .pic div');
	var $pic=$('#banner .banner .pic');
	var $btn=$('#banner .banner #btn div');
	var timer;
	var index=0;
	$Li.eq(0).addClass('on');
	$img.eq(0).show();
	$Li.click(function(){
		index=$(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$img.eq(index).fadeIn().siblings().fadeOut();
	});
	$btn.click(function(){
		var i=$(this).index();
		$Li.eq(index).removeClass('on');
		$img.eq(index).fadeOut();
		if (i)
		{
			index++;
			index %= length;
		}else{
			index--;
			if(index<=0)index=length-1;
		}
		$Li.eq(index).addClass('on');
		$img.eq(index).fadeIn();
	});
	$pic.hover(function(){clearInterval(timer);},auto);
	auto();
	function auto(){
		timer=setInterval(function(){
			$Li.eq(index).removeClass('on');
			$img.eq(index).fadeOut();
			index++;
			index %= length;
			$Li.eq(index).addClass('on');
			$img.eq(index).fadeIn();
		},3000);
	};
})();
/*silde*/
(function(){
	var $firLi=$('#slide .s_menu > li');
	var $lastLi=$('#slide .s_menu > li .s_hide ul li');
	var $hide=$('#slide .s_menu > li .s_hide');
	var width=$lastLi.width();
	var heigh=$lastLi.height();
	$hide.hover(function(){
		$(this).parent($firLi).css('background','#f60');
	},function(){
		$(this).parent($firLi).css('background','');
	});

	$firLi.each(function(){
		var length=$(this).find($lastLi).length;
		$(this).find($hide).css({
			width:Math.ceil(length/6)*width
		});

		$(this).find($lastLi).each(function(i){
			var y=i%6;
			var x=Math.floor(i/6);
			$(this).css({
				left:x*width,
				top:y*heigh
			});
		});
		
	});
	$firLi.hover(function(){
		$(this).find($hide).show();
	},function(){
		$(this).find($hide).hide();
	});

})();
/*小米明星单品*/
(function(){
	var $tel=$('#star .star_tel');
	var $sp=$('#star > p span');
	var index=0;
	var timer;
	$sp.click(function(){
	var i=$(this).index();
		if (i)
		{
			$(this).removeClass('on').siblings().addClass('on');
			$(this).parent().siblings($tel).stop().animate({
				left:'-1275px'
			},500);
		}else{
			$(this).removeClass('on').siblings().addClass('on');
			$(this).parent().siblings($tel).stop().animate({
				left:'0px'
			},500);
		}
	});
	$tel.hover(function(){
		clearInterval(timer);
	},auto);
	auto();
	function auto(){
			timer=setInterval(function(){
			index++;
			index%=$sp.length;
			$sp.eq(index).removeClass('on').siblings().addClass('on');
			$sp.eq(index).parent().siblings($tel).stop().animate({
				left:-1275*index+'px'
			},500);
		},5000);
	};
	
})();
/*content*/
(function(){
	var $A=$('.content .mart .m_top .all_list a');
	var $hide=$('.content .mart .m_bottom .m_b_right_d');
	var $mart=$('.content .mart');
	var index=0;
	$mart.each(function(){
		var This=$(this);
		$(this).find($hide).eq(0).show();
		$(this).find($A).hover(function(){
			index=$(this).index();
			$(this).addClass('on').siblings().removeClass('on');
			This.find($hide).eq(index).show().siblings($hide).hide();
		});
	});

})();

/*neirong*/
(function(){
	var $Li=$('#neirong > ul > li');
	var $tab=$('#neirong > ul > li .tab div');
	var $btn=$('#neirong > ul > li .btn div');
	var $ul=$('#neirong > ul > li .wrap > ul');
	var $lilen=$('#neirong > ul > li .wrap > ul li');
	$Li.each(function(){
		var This=$(this);
		var index=0;
		var length=$(this).find($lilen).length;
		$(this).find($btn).eq(0).addClass('on');
		$(this).find($btn).click(function(){
			index=$(this).index();
			$(this).addClass('on').siblings().removeClass('on');
			This.find($ul).stop().animate({
			marginLeft:-index*296+'px'
			},300);
		});
		$(this).find($tab).click(function(){
			if ( $(this).index() )
			{
				index++;
				if (index>=(length-1))index=length-1;
			}else{
				index--;
				if (index<=0)index=0;
			}
			This.find($btn).eq(index).addClass('on').siblings().removeClass('on');
			This.find($ul).stop().animate({
				marginLeft:-index*296+'px'
			},300);
		});
	});
	$Li.hover(function(){
		$(this).addClass('hover');
		$(this).find($tab).show(300);

	},function(){
		$(this).removeClass('hover');
		$(this).find($tab).hide(300);
	});
	$btn.hover(function(){
		$(this).css('background','#f60');
	},function(){
		$(this).css('background','rgba(0,0,0,.4)');
	});
})();
