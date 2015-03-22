var mql = window.matchMedia("screen and (min-width: 800px)")
if (mql.matches){ 
	$('#expander').hide();
	$('.content').show();
}
else{
	$('#expander').simpleexpand();  
}



