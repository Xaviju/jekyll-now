(function() {
    'use strict';

    //var stats = $.get("http://localhost:8000/api/v1/stats/system");
    var _fetchPosts = function() {
      var url = "https://medium.com/feed/@xaviju";
      feednami.load(url, function(response){
        console.log(response.feed);
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        var html = template(response.feed.entries);
        $("#main").append(html);
      })
    };

    var url = 'http://daringfireball.net/feeds/articles'
  feednami.load(url,function(result){
    if(result.error){
      console.log(result.error)
    }
    else{
      var entries = result.feed.entries
      for(var i = 0; i < entries.length; i++){
        var entry = entries[i]
        console.log(entry.title)
      }
    }
  })

    var init = function() {

       _fetchPosts();

     };

    init();

}());
