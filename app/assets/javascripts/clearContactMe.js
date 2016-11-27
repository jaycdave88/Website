var submitBtn = $(".submit_contactMe");
submitBtn.click(function(){
	// if() execute code here to find the names of the field are not empty
	if ($("#name").val()=='' || $("#email").val()=='' || $("#subject").val()=='' || $("#message").val()=='') {
		return;
	};
	var contactForm = $("#contactForm");
	$.ajax({
		url: contactForm.attr("action"),
		type: "POST",
		data: contactForm.serializeArray(),
		success:function(result, status){
			$("#name").val('');
			$("#email").val('');
			$("#subject").val('');
			$("#message").val('');
			
		}
	})
});



