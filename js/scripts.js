$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const textInput = $("input#text").toUpperCase();

    $(".text").text(textInput);
  });
});