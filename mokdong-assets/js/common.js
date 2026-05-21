//부드럽게 올라가는 scroll 
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

/* ★ 전체 메뉴 ★ */
$(function () {
    $('.toggle').on('click', function (e) {
        e.preventDefault();

        const $sitemap = $('#sitemap');
        const $dimmed = $('#dimmed');

        if ($sitemap.is(':visible')) {
            $sitemap.fadeOut(200).removeClass('active');
            $dimmed.fadeOut(200);
        } else {
            $sitemap.fadeIn(200).addClass('active');
            $dimmed.fadeIn(200);
        }
    });

    // 딤 영역 클릭 시 닫기
    $('#dimmed').on('click', function () {
        $('#sitemap').fadeOut(200).removeClass('active');
        $(this).fadeOut(200);
    });
});

/* ★ 메뉴 ★ */
$(document).ready(function () {
  // 탭 (1depth) 전환
  $('.tab-menu').on('click', function () {
    $('.tab-menu').removeClass('active');
    $(this).addClass('active');

    var id = $(this).data('tab');
    $('.panel-content').removeClass('active');
    if (id) $('#' + id).addClass('active');
  });

  // 서브 토글 (3depth)
  $('.sub-toggle').on('click', function (e) {
    e.preventDefault(); // 링크 동작 방지
    $(this).closest('.has-sub').toggleClass('active');
  });
});

$(document).ready(function () {
  $('.gnb-text > li').hover(
    function () {
      $(this).find('.num2').addClass('on');
    },
    function () {
      $(this).find('.num2').removeClass('on');
    }
  );
});


// 탑고정
window.addEventListener('scroll', function() {
  const header = document.getElementById('header-wrap');
  const scrollPosition = window.scrollY;
  if (scrollPosition > 50) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});
