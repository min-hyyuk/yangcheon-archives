$(function () {
  $(".fp_sec02 .active_team li").on("mouseenter",function(){
    $(".fp_sec02 .active_team li").not(this).removeClass("active");
    $(this).addClass("active");
    $(".fp_sec02 .map_img").removeClass("active");
    $(".fp_sec02 .map_img").eq($(this).index(".fp_sec02 .active_team li")).addClass("active");
  })
});
