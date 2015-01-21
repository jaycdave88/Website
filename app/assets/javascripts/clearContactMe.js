var testing = $(".submit_contactMe");
testing.click(function(){
var contactMeForm = $("#contactForm");
contactForm.post('/api/v1/contact');
// 	$("#name").val('');
// 	$("#email").val('');
// 	$("#subject").val('');
// 	$("#message").val('');
});

