$(function() {

  maxCharacters = 140;

  $("#count").text(maxCharacters);

  $("textarea").bind("keyup keydown", function() {
      var count = $("#count");
      var characters = $(this).val().length;

      if (characters > maxCharacters) {
          count.addClass("over");
          $("#tweetButton").attr("disabled", "disabled");
      } else {
          count.removeClass("over");
          $("#tweetButton").removeAttr("disabled", "disabled");
      }

      count.text(maxCharacters - characters);
  });

})