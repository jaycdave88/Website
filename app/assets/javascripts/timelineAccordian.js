$(".hidden").hide();
$(".accordion-header").click(function(){
  $(this).next().slideToggle("fast");
  
});