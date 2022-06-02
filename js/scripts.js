$(document).ready(function () {
  $(formOne).submit(function(event) {
    event.preventDefault();
    const userInput = $("input#userInput").val().toUpperCase();

    $(".userInput").text(userInput);

    $("#shout").show();
  });
});