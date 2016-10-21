$(function() {

  $('#compose').on('click', function(e) {
    $('.new-tweet').toggle('.new-tweet');
    $('#txtArea').focus();
  });

  function renderTweets(tweets) {
    tweets.forEach(function(tweet) {
      $('#tweetContainer').prepend(createTweetElement(tweet));
    });
  }


  function createTweetElement(tweet) {
    return  `
      <article class="tweet">
      <header>
        <img src="${tweet.user.avatars.small}"/>
        <span class='userName'>${tweet.user.name}</span>
        <span class='handle'>${tweet.user.handle}</span>
        </header>
      <p>${tweet.content.text}</p>
      <footer>
        <span>${tweet.created_at} days ago</span>
        <img src="/images/flag.png"/>
        <img src="/images/retweet.png"/>
        <img src="/images/heart.png"/>
      </footer>
      </article>`;
  };


  function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
      success: function (result) {
        console.log('Success');
        $('#tweetContainer').append(renderTweets(result));
      }
    })
  }

  // loadTweets();


  $('form').on('submit', function newTweet(event) {
    event.preventDefault();

    var tweet = $(this).serialize();

    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: tweet,
      dataType: 'json',
      success: function (tweet) {
        console.log('Success');
        $('#tweetContainer').prepend(createTweetElement(tweet));

      }
    });
  });

});