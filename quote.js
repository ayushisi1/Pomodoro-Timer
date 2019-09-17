$(document).ready(function() {
  $.ajax( {
      url: "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand",
      dataType: "json",
      success: function(data) {
        var post = data.shift();
        console.log(post);
        $('#quote').append(post.content.rendered);
        $('#quote').append("- " + post.title.rendered);
      },
    cache: false
  });
});
