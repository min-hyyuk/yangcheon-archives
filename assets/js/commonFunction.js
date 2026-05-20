
/*********************************************************************
input 및 button에 data-datepicker를 추가하여 달력 스크립트와 매핑
*********************************************************************/
$(function() {
    $(document).on("focus", "input[data-datepicker]", function () {
        var opts = {
        		showOtherMonths: true
        		, selectOtherMonths: true
        		};
        $(this).datepicker(opts);

    });

    $(document).on("click", "button[data-datepicker]", function () {
    	var altFieldVal = $(this).attr("data-datepicker");
    	$("#"+altFieldVal).focus();

    });

    /*
     	<style>
  			table.ui-datepicker-calendar { display:none; }
  		</style>
    */
    $(document).on("focus", "input[data-datepicker-month]", function () {
        var opts = {
        		showOtherMonths: true
        		, selectOtherMonths: true
        		, showButtonPanel: true
        		};

        opts.closeText = "선택";
        opts.dateFormat = "yyyy-mm-dd";
        opts.onClose = function (dateText, inst) {
            var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
            $(this).datepicker( "option", "defaultDate", new Date(year, month, 1) );
            $(this).datepicker('setDate', new Date(year, month, 1));
        };

        opts.beforeShow = function () {
            var selectDate = $(this).val().split("-");
            var year = Number(selectDate[0]);
            var month = Number(selectDate[1]) - 1;
            $(this).datepicker( "option", "defaultDate", new Date(year, month, 1) );
        };

        $(this).datepicker(opts);

    });

    $(document).on("click", "button[data-datepicker-month]", function () {
    	var altFieldVal = $(this).attr("data-datepicker-month");
    	$("#"+altFieldVal).focus();

    });

	$.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년'
    });
    
    
});


var navBarSwc = true;
var navBarMouseStatus;
var this_m = this_menu.substr(4,2);	// this_menu의 중분류
var this_s = this_menu.substr(6,2); // this_menu의 소분류

$(document).ready(function(e) {
   	
	// 좌측 메뉴 오픈
	if(!$("body").hasClass("main")) {
		navBarToggle(true);
	}
	
	// 좌측 GNB 현재 메뉴가 선택되도록
	initGnb();
	
	// 위치 및 사이즈 조정
	setPosition();
	
	// 커스텀 스크롤 적용
	$(".cScroll").niceScroll({styler:"fb",cursorcolor:"#ddd",cursorborder:"none",horizrailenabled:false});		
	
	$('.modal').on('hidden.bs.modal', function (e) {
		$(".modal-content").empty();
	});
	
	$('#quick_button').click(function(){
		$('.quick_menu').toggle();
	});
		
});


$(window).resize(function(e) {
    
	// 위치 및 사이즈 조정
	setPosition();
	
});


//위치 및 사이즈 조정
function setPosition() {
	
	if($("#systemContents").length > 0) {

		$("body.main .navToggleBt").hide();
		$("body.main #navBar").hide();
		$("body.main #navBar").css("margin-left","-230px");
		$("body.main #systemContents").css("margin-left","0px");
			
		$("#systemContents").width($("body").width()-$("#navBar").width()-Number($("#navBar").css("margin-left").replace("px", "")));
		$("#systemContents").height($("body").height()-$("#systemHeader").outerHeight()-$("#systemFooter").outerHeight());
		$(".scContainer").height($("body").height()-$("#systemHeader").outerHeight()-$("#systemFooter").outerHeight()-$(".sysContentHeader").outerHeight()-40);
		$(".scContainer").css("margin-top",$(".sysContentHeader").outerHeight());
		$("#navBar").height($("body").height()-$("#systemHeader").outerHeight()-$("#systemFooter").outerHeight());
		
		$(".cScroll").niceScroll({styler:"fb",cursorcolor:"#ddd",cursorborder:"none",horizrailenabled:false}).resize();
	
	}else if($("#systemPopupContents").length > 0) {

		$("body.main #systemPopupContents").css("margin-left","0px");
			
		$("#systemPopupContents").height($("body").height()-$("#systemHeader").outerHeight()-$("#systemFooter").outerHeight());
		$(".scContainer").height($("body").height()-$("#systemHeader").outerHeight()-$("#systemFooter").outerHeight()-$(".sysContentHeader").outerHeight()-40);
		$(".scContainer").css("margin-top",$(".sysContentHeader").outerHeight());
		
		$(".cScroll").niceScroll({styler:"fb",cursorcolor:"#ddd",cursorborder:"none",horizrailenabled:false}).resize();
	}
	
	// 크기가 변경되었을 때 AUIGrid.resize() 함수 호출 
	if (typeof myGridID !== "undefined") {
		AUIGrid.resize(myGridID);
	}
}






//좌측 메뉴 토글 버튼
function navBarToggle(swc) {
	
	if(swc) {
		navBarSwc = swc;
	}else {
		navBarSwc = !navBarSwc;	
	}
	
	if(navBarSwc == true) {		
		$("#navBar").css("margin-left","0px");
		$("#topLogo").css("display","block");
		$("#systemContents").css("margin-left","230px");
	} else {		
		$("#navBar").css("margin-left","-230px");
		$("#topLogo").css("display","none");
		$("#systemContents").css("margin-left","0px");
	}	
	setPosition();
}



