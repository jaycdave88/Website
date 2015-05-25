
$(".rotate").textrotator({
	animation: "dissolve",
	separator: ",",
});

window.addEventListener("load",function(){
	var load_screen = document.getElementById('load_screen');
	document.body.removeChild(load_screen)
})

