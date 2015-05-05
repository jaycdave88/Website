var testing = $(".submit_contactMe");
testing.click(function() {
    if ($("#name").val() == '' || $("#email").val() == '' || $("#subject").val() == '' || $("#message").val() == '') {
        return;
    };
    var contactForm = $("#contactForm");
    $.ajax({
        url: contactForm.attr("action"),
        type: "POST",
        data: contactForm.serializeArray(),
        success: function(result, status) {
            $("#name").val('');
            $("#email").val('');
            $("#subject").val('');
            $("#message").val('');

        }
    })
});