 $("#commentForm").validate({
  rules: {
    fullname: "required",
    email: "required",
    message: "required"
  },
  messages: {
    fullname: "Please specify your name",
    email: "Please enter a valid e-mail address",
    message: "Don't forget to leave a message"
  }
});

$(".lx-form form input[type='button']").on("click",function(){
  if ($("#commentForm").valid()) {
    
  };
});