$(function() {

  maxCharacters = 140;

  $("textarea").bind("keyup keydown", function() {
      var count = $("#count");
      var characters = $(this).val().length;

      if (characters > maxCharacters) {
          // disbable button, make counter red, show alert
          count.addClass("over");
          $(".alert").addClass("error");
          $("#tweetButton").attr("disabled", "disabled");
      } else {
        if(characters === 0) {
          // only disable the button
          $("#tweetButton").attr("disabled", "disabled");
        } else {
          // enable button, make counter grey, hide alert
          count.removeClass("over");
          $(".alert").removeClass("error");
          $("#tweetButton").removeAttr("disabled", "disabled");
        }
      }

      count.text(maxCharacters - characters);
  });

})