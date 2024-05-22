$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 10
                },
                subject: {
                    required: true,
                    minlength: 5
                },
                phone: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "Your name must consist of at least 10 characters"
                },
                subject: {
                    required: "come on, you have a subject, don't you?",
                    minlength: "Your subject must consist of at least 5 characters"
                },
                phone: {
                    required: "come on, you have a number, don't you?",
                    minlength: "Your number must consist of at least 10 digits"
                },
                email: {
                    required: "Please specify an email address"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "Your message is too brief"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"GET",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function(code) {
                        console.log(code);
                        if(code == 200 || code == 201 || code == 202){
                            $('#success-alert').fadeIn();
                        }else{
                            $('#danger-alert').fadeIn();
                        }
                        $('#contactForm')[0].reset();
                    },
                })
            }
        })
    })
        
 })(jQuery)
})