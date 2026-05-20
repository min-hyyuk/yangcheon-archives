$(document).ready(function() {
    
    //activate wow.js
     new WOW().init();
  
    //activate fullpage.js
    $('#fullpage').fullpage({
      scrollBar: true,
      navigation: true,
      navigationTooltips: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'],
      loopBottom: true,
      sectionSelector: 'section'
    });
  
  //apply color to each section from array
  int = -1;
  color_array = ['#fff','#fff','#fff','#fff','#fff','#fff'];

  $('section').each(function(){
    int++
    $(this).addClass('grid-item-' + int).css('background', color_array[int]);
  });
  
});