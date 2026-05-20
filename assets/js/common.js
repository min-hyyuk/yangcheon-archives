// 주소복사 스크립트

function clip(){

	var url = '';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = window.document.location.href;
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("URL이 복사되었습니다.")
}




//부드럽게 올라가는 scroll 
jQuery(document).ready(function($) {
 
        $(".scroll").click(function(event){            
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
        });
});


// navigation
function toggleNavigation(e) {
	var $currentDepth = $(e.target).parent('.select');
	if (!$currentDepth.hasClass('disabled')) {
		$currentDepth.siblings('.select').children('a, .list').removeClass('active');
		$(e.target).toggleClass('active');
		$(e.target).siblings('.list.selected').toggleClass('active');
	}
	return false;
}
function clickMenu(e) {

	var _this = e.target;
	var menuId = $(_this).attr('id');
	var href = $(_this).attr('href');
	var target = $(_this).attr('target');

	selectNavigation("#" + menuId);

	$(_this).parents('.list').removeClass('active');

	if (href == "#") {
		e.preventDefault();
		var $currentDepth = $(_this).parents('.select');
		var childMenu = $currentDepth.next('.select').not('.disabled').find('.list.selected > li > a.active');

		if (childMenu.length > 0) {
			var childHref = childMenu.attr('href');
			if (childHref == "#") {
				$(childMenu).trigger('click');
			} else {
				location.href = childHref;
			}
		}
		return false;
	}

}
function selectNavigation(selectedMenu, menuIndex){
	var menuIndex = menuIndex || 1;
	if ($(selectedMenu).length > 0) {
		var menuText = $(selectedMenu).html();
		$(selectedMenu).parents('.list').siblings('a').html(menuText);
		$(selectedMenu).parents('.list').find('a').removeClass('active');
		$(selectedMenu).addClass('active');

		var $depth = $(selectedMenu).parents('.select');
		$('.select').removeClass('last-child');
		var $childNavigation = $('#navigation .select').find('ul.list[data-menu-id="'+selectedMenu+'"]');
		if ($childNavigation.length > 0) {
			$depth.next('.select').removeClass('disabled');
			$depth.next('.select').addClass('last-child');
			$childNavigation.siblings(".list").removeClass('selected');
			$childNavigation.addClass('selected');

			if (menuIndex && !isNaN(menuIndex) ) {
				var $childMenu = $childNavigation.children().eq(menuIndex - 1).find('a');
				if ( $childMenu.length > 0 ){
					var childMenuText = $childMenu.html();
					$childMenu.parents('.list').siblings('a').html(childMenuText);
					$childMenu.parents('.list').find('a').removeClass('active');
					$childMenu.addClass('active');
				}
			}
		} else {
			$depth.addClass('last-child');
			$depth.next('.select').addClass('disabled');
			$depth.next('.select').children('a').html(' - ');
		}
	}
}
function initNavigation(depth1, depth2, menuIndex){

	selectNavigation(depth1);
	selectNavigation(depth2, menuIndex);

	if ($('#navigation').length > 0) {
		$('#navigation > .select > a').on('click', toggleNavigation);
		$("#navigation .list a").on("click", clickMenu);
		$("body").on("click", function(e){
			if ($(e.target).parents('#navigation').length <= 0) {
				$("#navigation .select > a").removeClass('active');
				$("#navigation .select > ul").removeClass('active');
			}
		});
	}
} 
$(document).ready(function(){
	initNavigation("#menu_1", "#menu_1_1", 1);


});




// 탭 스크립트
	$(document).ready(function(){

	  $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	  })
		
	 $('.tab-text a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tab-text a').removeClass('active');
		$('.tab-subContent').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	  })
		
	$('.tabs-onoff .select').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tabs-onoff .select').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	  })

	})
	


/* path */
$(document).ready(function(){
	$("ul.sub",".path").hide(); //(1)
	$("ul.menu li",".path").hover(function () { //(2)
		$("ul:not(:animated)", this).slideDown("fase"); //(3)
	},
	function () {
		$("ul", this).slideUp("fast"); //(3)
	});
});		


/*  */

$(document).ready(function() {
	js_fixed (); //js_fixed
	js_search (); //js_search 
	input_auto_val_setting (); //input_auto_val_setting
	gnb (); //gnb 
	floatingTop (); //floatingTop 	
	
	$(window).resize(function(){
		js_fixed (); //js_fixed
	});
	
	
});


//js_fixed
function js_fixed (){
	var fixed_obj = $("#header-wrap");
		fixed_obj.logo = fixed_obj.find(".logo"); 
		fixed_obj.gnb = fixed_obj.find("#gnb");
		fixed_obj.nav = fixed_obj.find("#nav");
		fixed_obj.sc = fixed_obj.find(".totalsearch");
	
	$(window).scroll(function () {	
		if(fixed_obj.gnb.attr("class") == "web"){ 
			var winTop = $(this).scrollTop();
			if(winTop >= 36){
				fixed_obj.addClass("fixed");
				fixed_obj.logo.stop().animate({"top":45+"px", "width":95+"px", "height":42+"px"},100);
				//fixed_obj.gnb.stop().animate({"height":65+"px"},100);
				fixed_obj.sc.stop().animate({"top":51+"px"},100); 
			} else {
				fixed_obj.removeClass("fixed"); 	
				fixed_obj.logo.stop().animate({"top":52+"px", "width":117+"px", "height":52+"px"},100);
				//fixed_obj.gnb.stop().animate({"height":85+"px"},100);
				fixed_obj.sc.stop().animate({"top":66+"px"},100);
			}
		}	
	});	
}

//js_search 
function js_search (){
	var search_obj = $(".totalsearch");
		search_obj.box = search_obj.find("div");
		search_obj.box.input = search_obj.box.find(">input");
		search_obj.btn = search_obj.find(">.btn"); 
	var	move = "";	
	 	
	//default
	js_search_def (search_obj);
	$(window).resize(function(){
		//js_search_def (search_obj);
	});
	
	//click
	search_obj.btn.click(function(){
		if(search_obj.box.is(":animated")) return false;
		if(!$(this).hasClass("active")){
			js_search_move (search_obj,"open");	
		} else {
			js_search_move (search_obj,"close");
		}	
		return false;	
	});	
	
	//mouseleave
	//search_obj.mouseleave(function(){	
	$("#header-wrap").mouseleave(function(){	
		if($(".mob_btn").is(":hidden")){
			if(search_obj.btn.hasClass("active")){
				js_search_move (search_obj,"close");		
			}
		}
	});
}
function js_search_move (search_obj,move){
	if(move == "open"){
		search_obj.btn.addClass("active").find(">span").text("검색닫기");
		if($(".mob_btn").is(":hidden")){
			//$("#nav").fadeOut(100);
			search_obj.box.stop().animate({"width":306+"px"},500,"easeInOutExpo",function(){
				search_obj.box.input.fadeIn(300);
			});		
		} else {
			search_obj.box.fadeIn(300);		
		}	
	} else if(move == "close") {
		search_obj.btn.removeClass("active").find(">span").text("검색열기");	
		if($(".mob_btn").is(":hidden")){
			search_obj.box.input.fadeOut(0);
			search_obj.box.stop().animate({"width":33+"px"},500,"easeInOutExpo",function(){
				//$("#nav").fadeIn(100);	
			});	
		} else {
			search_obj.box.fadeOut(300);	
		}
	}	
}
function js_search_def (search_obj){
	search_obj.btn.removeClass("active").find(">span").text("검색열기");
	if(!$(".mob_btn").is(":hidden")){
		search_obj.box.hide();
	} else {
		search_obj.box.show();	
	}	
}	

//input_auto_val_setting
function input_auto_val_setting (){
	var inputs = $(".input_val");
	for(var i=0; i<inputs.size(); i++){
		if(!inputs.eq(i).val()){
			inputs.titles = inputs.eq(i).attr("title");
			inputs.eq(i).val(inputs.titles);
		}
	}
	inputs.siblings("input[type=image], input[type=submit], input[type=button]").click(function(){
		var obj = $(this).siblings("input[type=text]"); 
		var v = obj.val();
		var t = obj.attr("title");
		
		if(v == t){
			obj.val("");			
		}
	});
	inputs.on("focus",function(){
		var t = $(this).attr("title");
		var v = $(this).val();

		if(t == v || v == ""){
			$(this).val("");
		}
	});
	inputs.on("blur",function(){
		var t = $(this).attr("title");
		var v = $(this).val();

		if(v == ""){
			$(this).val(t);
		}
	});
}

//gnb
function gnb (){
	var res = "";
	var param = $("#gnb");
		param.nav = param.find(">.al_box> #nav");
		param.nav.ul = param.nav.find(">ul"); 
		param.nav.ul.li = param.nav.ul.find(">li"); 
		param.nav.ul.li.a = param.nav.ul.li.find(">a"); 
		param.nav.ul.li.ul = param.nav.ul.li.find(">ul"); 
		param.nav.ul.li.ul.li = param.nav.ul.li.ul.find(">li"); 
		param.nav.ul.li.ul.li.a = param.nav.ul.li.ul.li.find(">a"); 
		param.nav.ul.li.ul.li.ul = param.nav.ul.li.ul.li.find(">ul"); 	
		param.nav.ul.li.ul.li.ul.li = param.nav.ul.li.ul.li.ul.find(">li"); 
		param.nav.ul.li.ul.li.ul.li.a = param.nav.ul.li.ul.li.ul.li.find(">a"); 
		param.blind = param.find(">#blind");
		param.times = "";
		param.blind.hei = "200"; 
		param.blind_mob = param.siblings("#blind_mob"); 

	//default	
	param.nav.ul.li.a.each(function(e){
		$(this).addClass("num"+(e+1));	
	});
	param.nav.ul.li.ul.css({"height":0});			
	param.nav.ul.li.ul.find(">li:first-child").css({"padding-top":20+"px"});
	if(!$(".mob_btn").is(":hidden")) res = "mob";
	else res = "web";
	param.attr("class",res);		
	def(param);
	$(window).resize(function(){
		if(!$(".mob_btn").is(":hidden")) res2 = "mob";
		else res2 = "web";
		param.attr("class",res2);		
		if(res != res2){
			def(param);
			res = res2;
		}
	});
	
	//web
	param.nav.ul.li.a.mouseover(function(){
		clearTimeout(param.times); 
		if(param.attr("class") == "web"){
			param.nav.ul.li.a.removeClass("ov").siblings("ul").removeClass("ov");
			$(this).addClass("ov").siblings("ul").addClass("ov");
			if($(this).siblings("ul").size() != 0){
				param.blind.show().stop().animate({"height":param.blind.hei +"px"},500,"easeOutCubic");	
				param.nav.ul.li.ul.show().stop().animate({"height":param.blind.hei +"px"},500,"easeOutCubic");		 	
			}
		}
	});
	
	param.nav.ul.li.a.mouseout(function(){
		if (param.attr("class") == "web") {
			param.times = setTimeout(function(){
				def(param);
			},1000);
		}	
	});	
	param.nav.ul.li.ul.mouseenter(function(){
		if (param.attr("class") == "web") {
			clearTimeout(param.times);
		}
	});
	
	param.nav.ul.mouseleave(function(){
		if (param.attr("class") == "web") {
			def(param);	
		}
	});
	param.nav.ul.li.ul.li.a.mouseover(function(){
		if (param.attr("class") == "web") {
			param.nav.ul.li.a.removeClass("ov").siblings("ul").removeClass("ov");
			$(this).parent().parent().siblings("a").addClass("ov");
			$(this).parent().parent().addClass("ov");
		}
	});	
	param.nav.ul.li.a.focus(function(){
		if (param.attr("class") == "web") {
			$(this).mouseover();
		}
	});
	param.nav.ul.li.eq(4).find(">ul>li").last().find(">a").blur(function(){
		if (param.attr("class") == "web") {
			param.nav.ul.li.a.mouseout();
		}
	});
	
	//mobile
	function mob_close(){
		$(".mob_btn").removeClass("ov");
		$("#wrap>*").animate({"right":0},300,"easeOutCubic");
		param.stop().animate({"right":-300+"px"},300,"easeOutCubic",function(){
			$(this).hide().css({"height":"auto"});	
		});
		param.blind_mob.stop().animate({"right":0,"opacity":0},300,"easeOutCubic",function(){
			$(this).hide();	
		});
	}
	$(".mob_btn").click(function(){
		if(param.blind.is(":animated")) return false;
		if(!$(".mob_btn").hasClass("ov")){
			$(this).addClass("ov");
			$("#wrap > *").stop().animate({"right":300+"px"},300,"easeOutCubic");
			param.show().css({"height":$(document).height()+"px"});
			param.blind_mob.show().stop().animate({"right":300,"opacity":0.6},300,"easeOutCubic");
		} else {
			mob_close();	
		}
		return false;	
	});
	param.blind_mob.click(function(){
		mob_close();
		return false;	
	});
	
	param.nav.ul.li.a.click(function(){
		if(param.attr("class") == "mob"){
			param.nav.ul.li.ul.css({"height":"auto"});
			param.nav.ul.li.a.not(this).removeClass("ov").next().slideUp();
			$(this).toggleClass("ov").next().slideToggle();
			return false;
		} else if (param.attr("class") == "web") {
			return true;	
		}	 
	});
	param.nav.ul.li.ul.li.a.click(function(){ 
		if(param.attr("class") == "mob"){
			if($(this).next().size() != 0){
				param.nav.ul.li.ul.li.a.not(this).removeClass("ov").next().slideUp();
				$(this).toggleClass("ov").next().slideToggle();	
				return false;
			}
		} else if (param.attr("class") == "web") {
			return true;	
		}
	});
	param.nav.ul.li.ul.li.ul.li.a.click(function(){
		if(param.attr("class") == "mob"){
			if($(this).next().size() != 0){
				param.nav.ul.li.ul.li.ul.li.a.not(this).removeClass("ov").next().slideUp();
				$(this).toggleClass("ov").next().slideToggle();	
				return false;
			}
		} else if (param.attr("class") == "web") {
			return true;	
		}
	});
	
}	
function def(param){
	if(param.attr("class") == "web"){
		param.nav.ul.li.a.removeClass("ov").siblings("ul").removeClass("ov");
		param.blind.css({"right":0,"opacity":0.9}).stop().animate({"height":0},500,"easeOutCubic",function(){
			$(this).hide();
		});	
		param.nav.ul.li.ul.stop().animate({"height":0},500,"easeOutCubic",function(){
			$(this).hide();	
		});
	} else if (param.attr("class") == "mob"){
		$(".mob_btn").removeClass("ov");
		$("#wrap > *").css({"right":0});
		param.hide().css({"height":"auto"});
		param.blind_mob.hide().css({"opacity":0,"right":0});
		param.nav.ul.li.a.removeClass("ov").next().slideUp();
		param.nav.ul.li.ul.removeAttr("style");
		param.nav.ul.li.ul.li.a.removeClass("ov").next().slideUp();
		param.nav.ul.li.ul.li.ul.li.a.removeClass("ov").next().slideUp();
	}
}
 
//floatingTop
function floatingTop (){
	$(window).scroll(function () {
		var winTop = $(this).scrollTop();
		var headerTop = $("#header-wrap").height();
		
		if (winTop > headerTop) {
			$(".floating_top").fadeIn(300,"easeOutCubic");
		} else if (winTop <= headerTop) {
			$(".floating_top").fadeOut(300,"easeOutCubic");
		}
	});	
	$(".floating_top a").click(function(){
		$("body,html").stop().animate({"scrollTop":"0"},600,"easeOutCubic");
		return false;
	});
}

//pop-layer
function layer_open(el){

		var temp = $('#' + el);		//레이어의 id를 temp변수에 저장
		var bg = temp.prev().hasClass('bg');	//dimmed 레이어를 감지하기 위한 boolean 변수

		if(bg){
			$('.layer').fadeIn();
		}else{
			temp.fadeIn();	//bg 클래스가 없으면 일반레이어로 실행한다.
		}

		// 화면의 중앙에 레이어를 띄운다.
		if (temp.outerHeight() < $(document).height() ) temp.css('margin-top', '-'+temp.outerHeight()/2+'px');
		else temp.css('top', '0px');
		if (temp.outerWidth() < $(document).width() ) temp.css('margin-left', '-'+temp.outerWidth()/2+'px');
		else temp.css('left', '0px');

		temp.find('a.cbtn').click(function(e){
			if(bg){
				$('.layer').fadeOut();
			}else{
				temp.fadeOut();		//'닫기'버튼을 클릭하면 레이어가 사라진다.
			}
			e.preventDefault();
		});

		$('.layer .bg').click(function(e){
			$('.layer').fadeOut();
			e.preventDefault();
		});

	}	

// quick menu

$(document).ready(function() {
 /* quick menu */
 $("#quickMenu").animate( { "top": $(document).scrollTop() + 225 +"px" }, 500 ); // 빼도 된다.
 $(window).scroll(function(){
  $("#quickMenu").stop();
  $("#quickMenu").animate( { "top": $(document).scrollTop() + 225 + "px" }, 10 );
 });
});

//top scrollup
$(document).ready(function(){ 
			
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	}); 
	
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

});


//faq
$(document).ready(function(){ 
 // Hiding the panel content. If JS is inactive, content will be displayed
		$( '.panel-content' ).hide();

		// Preparing the DOM

		// -- Update the markup of accordion container 
		$( '.accordion' ).attr({
			role: 'tablist',
			multiselectable: 'true'
		 });

		// -- Adding ID, aria-labelled-by, role and aria-labelledby attributes to panel content
		$( '.panel-content' ).attr( 'id', function( IDcount ) { 
			return 'panel-' + IDcount; 
		});
		$( '.panel-content' ).attr( 'aria-labelledby', function( IDcount ) { 
			return 'control-panel-' + IDcount; 
		});
		$( '.panel-content' ).attr( 'aria-hidden' , 'true' );
		// ---- Only for accordion, add role tabpanel
		$( '.accordion .panel-content' ).attr( 'role' , 'tabpanel' );

		// -- Wrapping panel title content with a <a href="">
		$( '.panel-title' ).each(function(i){

			// ---- Need to identify the target, easy it's the immediate brother
			$target = $(this).next( '.panel-content' )[0].id;

			// ---- Creating the link with aria and link it to the panel content
			$link = $( '<a>', {
				'href': '#' + $target,
				'aria-expanded': 'false',
				'aria-controls': $target,
				'id' : 'control-' + $target
			});

			// ---- Output the link
			$(this).wrapInner($link);  

		});

		// Optional : include an icon. Better in JS because without JS it have non-sense.
		$( '.panel-title a' ).append('<span class="icon">+</span>');

		// Now we can play with it
		$( '.panel-title a' ).click(function() {

			if ($(this).attr( 'aria-expanded' ) == 'false'){ //If aria expanded is false then it's not opened and we want it opened !

				// -- Only for accordion effect (2 options) : comment or uncomment the one you want

				// ---- Option 1 : close only opened panel in the same accordion
				//      search through the current Accordion container for opened panel and close it, remove class and change aria expanded value
				$(this).parents( '.accordion' ).find( '[aria-expanded=true]' ).attr( 'aria-expanded' , false ).removeClass( 'active' ).parent().next( '.panel-content' ).slideUp(200).attr( 'aria-hidden' , 'true');

				// Option 2 : close all opened panels in all accordion container
				//$('.accordion .panel-title > a').attr('aria-expanded', false).removeClass('active').parent().next('.panel-content').slideUp(200);

				// Finally we open the panel, set class active for styling purpos on a and aria-expanded to "true"
				$(this).attr( 'aria-expanded' , true ).addClass( 'active' ).parent().next( '.panel-content' ).slideDown(200).attr( 'aria-hidden' , 'false');

			} else { // The current panel is opened and we want to close it

				$(this).attr( 'aria-expanded' , false ).removeClass( 'active' ).parent().next( '.panel-content' ).slideUp(200).attr( 'aria-hidden' , 'true');;

			}
			// No Boing Boing
			return false;
		});

});







