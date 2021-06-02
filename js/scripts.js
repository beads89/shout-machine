$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const textInput = $("input#text").val().toUpperCase();

    $(".text").text(textInput);

    $("#shout").show();
  });
});