$(function(){  

  $("#myform").validate({
    rules: {
      email: "required",
      email_confirmation: {
        required: true,
        equalTo: "#email"
      },
      country: "required",
      zip: {
        required: true,
        digits: true,
        minlength: 5,
        maxlength: 5
      },
      password: {
        required: true,
        minlength: 8        
      },
      password_confirmation: {
        required: true,
        minlength: 8,
        equalTo: "#password"
      }
    },

    messages: {
      email_confirmation: {
        required: "Please confirm your email address",
        equalTo:  "The confirmation email must match the email provided above"
      },
      country:  "Please enter your current country of residence",
      zip: { 
        required: "Zip code cannot be blank",
        digits: "Zip code must contain numbers only",
        minlength: "Zip code must consist of exactly 5 numbers",
        maxlength: "Zip code must consist of exactly 5 numbers"
      },
      password: {
        required: "You must provide a password",
        minlength: "The password must contain at least 8 characters"
      },
      password_confirmation: {
        required: "You must provide a password",
        minlength: "The password must contain at least 8 characters",
        equalTo:  "The confirmation password must match the password provided above"
      }
    }
  });
});
