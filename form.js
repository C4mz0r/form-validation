$(function(){
  alert('Called JS');
  $("#myform").validate({
    rules: {
      email: "required",
      email_confirmation: "required",
      country: "required",
      zip: "required",
      password: "required",
      password_confirmation: "required"
    }
  });
});
