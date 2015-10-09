$(window).resize(function(){
  var mql = window.matchMedia("screen and (min-width: 800px)")
  if (mql.matches){ 
    $('.content').show();
    $('#expander').hide();
  }
  else{
    $('.content').hide();
    $('#expander').show();

    $('#expander').click(function() {
      var clicks = $(this).data('clicks');
      if (clicks) {
         $('.content').hide()
      } else {
         $('.content').show();
      }
      $(this).data("clicks", !clicks);
    });
  }
})

