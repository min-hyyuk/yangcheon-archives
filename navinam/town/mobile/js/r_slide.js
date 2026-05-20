
$(document).ready(function() {

	// search
	$('.menu2 .on').click(function() {
		$('.nav').animate({right: '0'}, "slow");
		//$('.contents_area').animate({width: "+=300"}, "slow", fn_setSearchHeight);
		$('.menu2 .on').hide();
		$('.menu2 .off').show();

	});

	$('.menu2 .off').click(function() {
		$('.nav').animate({right: '-520px'}, "slow");

		//$('.contents_area').animate({width: "-=300"}, "slow", fn_setSearchHeight);
		$('.menu2 .off').hide();
		$('.menu2 .on').show();

	});

	$('.nav').click(function() {
		$('.nav').animate({right: '-520px'}, "slow");

		//$('.contents_area').animate({width: "-=300"}, "slow", fn_setSearchHeight);
		$('.menu2 .off').hide();
		$('.menu2 .on').show();

	});
});




function fn_getClientInfo() {
    var userAgent = navigator.userAgent;
    var reg = null;
    var browser = {
        name: null,
        version: null
    };

    userAgent = userAgent.toLowerCase();

    if (userAgent.indexOf("opr") !== -1) {
        reg = /opr\/(\S+)/;
        browser.name = "Opera";
        browser.version = reg.exec(userAgent)[1];
    } else if (userAgent.indexOf("edge") !== -1) {
        reg = /edge\/(\S+)/;
        browser.name = "Edge";
        browser.version = reg.exec(userAgent)[1];
    } else if (userAgent.indexOf("chrome") !== -1) {
        reg = /chrome\/(\S+)/;
        browser.name = "Chrome";
        browser.version = reg.exec(userAgent)[1];
    } else if (userAgent.indexOf("safari") !== -1) {
        reg = /safari\/(\S+)/;
        browser.name = "Safari";
        browser.version = reg.exec(userAgent)[1];
    } else if (userAgent.indexOf("firefox") !== -1) {
        reg = /firefox\/(\S+)/;
        browser.name = "Firefox";
        browser.version = reg.exec(userAgent)[1];
    } else if (userAgent.indexOf("trident") !== -1) {
        browser.name = "IE";

        if (userAgent.indexOf("msie") !== -1) {
            reg = /msie (\S+)/;
            browser.version = reg.exec(userAgent)[1];
            browser.version = browser.version.replace(";", "");
        } else {
            reg = /rv:(\S+)/;
            browser.version = reg.exec(userAgent)[1];
        }
    }

    return browser;
}

//function fn_setSearchHeight() {
//	if (($(window).height() - 141) > $('.contents_area').height()){
//		$('.lnb_search').css({'height' : ($(window).height() - 141) +'px'});
	//}else{
//		$('.lnb_search').css({'height' : ($('.contents_area').height() + 50) +'px'});
//	}
//}
