$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#contactForm").validate({
    // Specify validation rules
    rules: {
      name:{
        required: true,
        minlength: 5
      },
      email:{
        required: true,
        email: true
      },
      subject:{
        required: true,
        minlength: 5
      }
    },
    // Specify validation error messages

    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
      alert("Email sent!");
    }
  });
});