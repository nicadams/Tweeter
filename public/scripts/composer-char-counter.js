$(function() {

  maxCharacters = 140;

  $("textarea").bind("keyup keydown", function() {
      var count = $("#count");
      var characters = $(this).val().length;

      if (characters > maxCharacters) {
          // disbable button and make counter red
          count.addClass("over");
          $("#tweetButton").attr("disabled", "disabled");
      } else {
        if(characters === 0) {
          // only disable the button
          $("#tweetButton").attr("disabled", "disabled");
        } else {
          // enable button and make counter grey
          count.removeClass("over");
          $("#tweetButton").removeAttr("disabled", "disabled");
        }
      }

      count.text(maxCharacters - characters);
  });

})