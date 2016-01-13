$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >=18) {
    $(".over18").show();
    alert("GO REGISTER!!");
  } else {
    $(".under18").show();
  }

});
