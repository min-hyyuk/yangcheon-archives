



/* 페이지전환 효과 */
$(document).ready(function() {
    $("body").delay(200).animate({ opacity: 1 }, 500);
});

/* navigation */

$(document).ready(function() {
  $("#fullpage").fullpage({
    anchors:["top", "1st", "2nd", "3rd","4th","5th","6th","7th","8th","9th","10th","11st","12nd","13rd","14th","15th","videoList"],
    menu:"#topMenu"
  });
});


/*  */

$(function(){
  $('nav a').click(function(e){
    $.scrollTo(this.hash || 0, 1500);
    e.preventDefault();
  });
});


/* mainPage 롤링 */

  $(function(){
    $('.main').vegas({
      slides:[
        {src:'img/bg/secBg_01.jpg'},
        {src:'img/bg/secBg_02.jpg'},
      ],
      delay:3500
    });
  });



  $(document).ready(function() {
    $('#pop_bt01').click(function() {
      $('#pop01').show();
    });

    $('#close').click(function() {
      $('#pop01').hide();
    });
  });
